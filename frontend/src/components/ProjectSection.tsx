'use client';

import Link from 'next/link';
import { useLanguage } from '@/src/context/LanguageContext';
import { useTheme } from '@/src/context/ThemeContext';
import { projectIntroByLanguage, projectsByLanguage } from '@/src/data/portfolio';

export default function ProjectsSection() {
    const { language, t } = useLanguage();
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const projects = projectsByLanguage[language];
    const intro = projectIntroByLanguage[language];
    const borderColor = isDark ? 'border-gray-800' : 'border-gray-200';
    const textColor = isDark ? 'text-gray-300' : 'text-gray-700';
    const viewDetailsLabel = language === 'fr' ? 'Voir détails' : 'View Details';

    return (
        <section
            id="projects"
            className={`px-8 py-24 ${isDark ? 'bg-gradient-to-b from-slate-900/20 to-slate-800/10' : 'bg-gradient-to-b from-slate-100/60 to-white'
                }`}
        >
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <h3 className="mb-4 bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-blue-400 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
                        {t('projects.title')}
                    </h3>
                    <p className={`mx-auto max-w-2xl text-lg ${textColor}`}>{intro}</p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            href={`/projects/${project.id}`}
                            className={`group relative block overflow-hidden rounded-3xl border p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/10 ${borderColor} ${isDark ? 'bg-slate-900/70' : 'bg-white/80'
                                }`}
                            aria-label={`${viewDetailsLabel} ${project.title}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-fuchsia-500/0 transition group-hover:from-cyan-500/10 group-hover:to-fuchsia-500/10" />
                            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />
                            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-fuchsia-500/10 blur-3xl" />

                            <div className="relative mb-6">
                                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-cyan-400">
                                    {project.category}
                                </p>
                                <h4 className="text-2xl font-bold leading-tight transition group-hover:text-cyan-300 md:text-3xl">
                                    {project.title}
                                </h4>
                            </div>

                            <p className={`mb-6 text-base leading-relaxed md:text-lg ${textColor}`}>
                                {project.description}
                            </p>

                            <div className="mb-8 flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className={`rounded-full border px-3 py-1 text-sm ${isDark
                                                ? 'border-cyan-400/20 bg-cyan-400/10 text-cyan-200'
                                                : 'border-cyan-200 bg-cyan-50 text-cyan-700'
                                            }`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="relative flex items-center justify-between">
                                <span className="inline-flex items-center gap-2 font-semibold text-cyan-400 transition group-hover:text-cyan-300">
                                    {viewDetailsLabel} <span className="transition group-hover:translate-x-1">→</span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}