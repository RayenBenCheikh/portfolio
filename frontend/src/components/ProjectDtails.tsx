'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useLanguage } from '@/src/context/LanguageContext';
import { useTheme } from '@/src/context/ThemeContext';
import { projectsByLanguage, type Project } from '@/src/data/portfolio';

export default function ProjectDetailsPage() {
    const params = useParams();
    const { language } = useLanguage();
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const projectId = Number(params.id);
    const project = projectsByLanguage[language].find(
        (item: Project) => item.id === projectId
    );

    if (!project) {
        return <div className="p-10">Project not found.</div>;
    }

    const screenshots =
        project.screenshots && project.screenshots.length > 0
            ? project.screenshots
            : [project.image];

    return (
        <main
            className={`min-h-screen px-8 py-20 ${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
                }`}
        >
            <div className="mx-auto max-w-5xl">
                <Link href="/#projects" className="mb-8 inline-block text-cyan-400 hover:underline">
                    ← Back to projects
                </Link>

                <div
                    className={`overflow-hidden rounded-3xl border ${isDark ? 'border-gray-800 bg-slate-900' : 'border-gray-200 bg-white'
                        }`}
                >
                    <div className="p-8">
                        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-cyan-400">
                            {project.category}
                        </p>

                        <h1 className="mb-4 text-4xl font-bold">{project.title}</h1>

                        <p className={`mb-6 text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {project.description}
                        </p>

                        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {screenshots.map((src: string, index: number) => (
                                <button
                                    key={src}
                                    type="button"
                                    onClick={() => setSelectedImage(src)}
                                    className={`relative aspect-video overflow-hidden rounded-2xl border cursor-zoom-in transition hover:scale-[1.01] ${isDark
                                            ? 'border-gray-800 bg-black/20'
                                            : 'border-gray-200 bg-gray-100'
                                        }`}
                                >
                                    <Image
                                        src={src}
                                        alt={`${project.title} screenshot ${index + 1}`}
                                        fill
                                        className="object-contain"
                                    />
                                </button>
                            ))}
                        </div>

                        <div className="mb-8">
                            <h2 className="mb-3 text-2xl font-semibold">About the project</h2>
                            <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                                {project.details}
                            </p>
                        </div>

                        {!!project.highlights?.length && (
                            <div className="mb-8">
                                <h2 className="mb-3 text-2xl font-semibold">Key features</h2>
                                <ul className="list-disc space-y-2 pl-6">
                                    {project.highlights.map((item) => (
                                        <li
                                            key={item}
                                            className={isDark ? 'text-gray-300' : 'text-gray-700'}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div>
                            <h2 className="mb-3 text-2xl font-semibold">Technologies used</h2>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className={`rounded-full px-3 py-1 text-sm ${isDark
                                                ? 'bg-cyan-400/10 text-cyan-300'
                                                : 'bg-cyan-50 text-cyan-700'
                                            }`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative h-[95vh] w-[95vw]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage}
                            alt="Fullscreen preview"
                            className="h-full w-full object-contain"
                        />
                    </div>
                </div>
            )}
        </main>
    );
}