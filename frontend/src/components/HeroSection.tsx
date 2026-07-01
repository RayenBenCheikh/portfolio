'use client';

import CVModal from '@/src/components/CvModal';
import { useLanguage } from '@/src/context/LanguageContext';
import { useTheme } from '@/src/context/ThemeContext';

export default function HeroSection() {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const borderColor = isDark ? 'border-gray-800' : 'border-gray-200';
    const outerTechs = [

        { src: '/svg/python.svg', alt: 'Python', angle: 110, radius: 235 },
        { src: '/svg/tensorflow.svg', alt: 'TensorFlow', angle: 260, radius: 170 },
        { src: '/svg/git.svg', alt: 'Git', angle: 200, radius: 235 },
    ];

    const innerTechs = [
        { src: '/svg/react.svg', alt: 'React', angle: 20, radius: 235 },
        { src: '/svg/javascript.svg', alt: 'JavaScript', angle: 40, radius: 170 },
        { src: '/svg/typescript.svg', alt: 'TypeScript', angle: 150, radius: 170 },

    ];
    return (
        <section id="home" className="px-8 pb-20 pt-32">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
                <div>
                    <div className={`mb-6 inline-block rounded-full border px-4 py-2 ${borderColor} bg-gradient-to-r from-cyan-500/20 to-blue-500/20`}>
                        <span className="flex items-center gap-2 text-cyan-400">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                            {t('hero.available')}
                        </span>
                    </div>

                    <h1 className="mb-4 text-6xl font-extrabold leading-tight md:text-7xl">
                        <span className={`block ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {t('hero.title')}
                        </span>

                        <span
                            className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-pulse"
                            style={{
                                textShadow: '0 2px 0 rgba(0,0,0,0.25), 0 4px 10px rgba(0,0,0,0.35)',
                            }}
                        >
                            Rayen Ben Cheikh
                        </span>
                    </h1>

                    <p className={`mb-2 text-xl font-semibold tracking-wide ${isDark ? 'text-cyan-300' : 'text-blue-600'} animate-pulse`}>
                        {t('hero.subtitle')}
                    </p>
                    <p className={`mb-8 max-w-lg text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('hero.description')}</p>

                    <div className="mb-8 flex gap-4">
                        <a href="#projects" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 font-bold transition hover:scale-105 hover:from-cyan-600 hover:to-blue-600">
                            {t('hero.viewWork')}
                        </a>
                        <CVModal />
                    </div>
                </div>

                <div className="relative flex h-[420px] w-[420px] items-center justify-center md:h-[560px] md:w-[560px]">
                    <div className="absolute inset-0 rounded-full border border-white/10" />
                    <div className="absolute inset-14 rounded-full border border-white/10" />

                    {outerTechs.map((tech, index) => (
                        <div
                            key={`${tech.alt}-${index}`}
                            className="orbit-slot"
                            style={
                                {
                                    '--angle': `${tech.angle}deg`,
                                    '--radius': `${tech.radius}px`,
                                    '--duration': '30s',
                                } as React.CSSProperties
                            }
                        >
                            <div className="orbit-item">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/10 shadow-lg backdrop-blur-md">
                                    <img src={tech.src} alt={tech.alt} className="h-9 w-9 object-contain" />
                                </div>
                            </div>
                        </div>
                    ))}

                    {innerTechs.map((tech, index) => (
                        <div
                            key={`${tech.alt}-${index}`}
                            className="orbit-slot"
                            style={
                                {
                                    '--angle': `${tech.angle}deg`,
                                    '--radius': `${tech.radius}px`,
                                    '--duration': '30s',
                                } as React.CSSProperties
                            }
                        >
                            <div className="orbit-item">
                                <div className="flex h-17 w-17 items-center justify-center rounded-full border border-white/15 bg-white/10 shadow-lg backdrop-blur-md">
                                    <img src={tech.src} alt={tech.alt} className="h-7 w-7 object-contain" />
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="relative z-10 flex h-80 w-80 items-center justify-center overflow-hidden rounded-full border-4 border-cyan-500/40 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 shadow-2xl">
                        <img
                            src="/images/ray.png"
                            alt="Rayen Ben Cheikh"
                            className="h-full w-full object-cover object-[50%_15%] scale-[1]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}