'use client';

import CVModal from '@/src/components/CvModal';
import { useLanguage } from '@/src/context/LanguageContext';
import { useTheme } from '@/src/context/ThemeContext';

export default function HeroSection() {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const borderColor = isDark ? 'border-gray-800' : 'border-gray-200';

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

                    <h1 className="mb-4 text-6xl font-bold md:text-7xl">
                        {t('hero.title')} <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Rayen</span>
                    </h1>

                    <p className={`mb-2 text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{t('hero.subtitle')}</p>
                    <p className={`mb-8 max-w-lg text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t('hero.description')}</p>

                    <div className="mb-8 flex gap-4">
                        <a href="#projects" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 font-bold transition hover:scale-105 hover:from-cyan-600 hover:to-blue-600">
                            {t('hero.viewWork')}
                        </a>
                        <CVModal />
                    </div>
                </div>

                <div className="flex justify-center">
                    <span className="text-9xl">👨‍💻</span>
                </div>
            </div>
        </section>
    );
}