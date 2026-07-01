'use client';

import { useLanguage } from '@/src/context/LanguageContext';
import { useTheme } from '@/src/context/ThemeContext';

export default function Header() {
    const { language, setLanguage, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    const headerBg = isDark ? 'bg-black/40' : 'bg-white/40';
    const borderColor = isDark ? 'border-gray-800' : 'border-gray-200';

    return (
        <header className={`fixed top-0 z-50 w-full border-b ${borderColor} ${headerBg} backdrop-blur-md`}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
                <h1 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent">
                    Rayen
                </h1>

                <div className="hidden gap-8 md:flex">
                    <a href="#home" className={`${isDark ? 'hover:text-cyan-400' : 'hover:text-cyan-600'} transition`}>{t('nav.home')}</a>
                    <a href="#projects" className={`${isDark ? 'hover:text-cyan-400' : 'hover:text-cyan-600'} transition`}>{t('nav.projects')}</a>
                    <a href="#skills" className={`${isDark ? 'hover:text-cyan-400' : 'hover:text-cyan-600'} transition`}>{t('nav.skills')}</a>
                    <a href="#contact" className={`${isDark ? 'hover:text-cyan-400' : 'hover:text-cyan-600'} transition`}>{t('nav.contact')}</a>
                </div>

                <div className="flex items-center gap-4">
                    <div className={`flex gap-2 rounded-lg p-1 ${isDark ? 'bg-gray-800/50' : 'bg-gray-200/50'}`}>
                        <button
                            onClick={() => setLanguage('en')}
                            className={`rounded px-3 py-1 transition ${language === 'en' ? 'bg-cyan-500 text-white' : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => setLanguage('fr')}
                            className={`rounded px-3 py-1 transition ${language === 'fr' ? 'bg-cyan-500 text-white' : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                            FR
                        </button>
                    </div>

                    <button
                        onClick={toggleTheme}
                        className={`rounded-lg p-2 transition ${isDark ? 'bg-gray-800/50 hover:bg-cyan-500/20' : 'bg-gray-200/50 hover:bg-cyan-400/20'}`}
                        title="Toggle theme"
                    >
                        {isDark ? '☀️' : '🌙'}
                    </button>
                </div>
            </nav>
        </header>
    );
}