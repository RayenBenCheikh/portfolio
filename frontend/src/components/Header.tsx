'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/src/context/LanguageContext';
import { useTheme } from '@/src/context/ThemeContext';

export default function Header() {
    const { language, setLanguage, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sections = ['contact', 'skills', 'projects', 'home'];

        const updateActiveSection = () => {
            const offset = 140;

            for (const id of sections) {
                const el = document.getElementById(id);
                if (!el) continue;

                const rect = el.getBoundingClientRect();

                if (rect.top <= offset && rect.bottom > offset) {
                    setActiveSection(id);
                    return;
                }
            }

            setActiveSection('home');
        };

        updateActiveSection();
        window.addEventListener('scroll', updateActiveSection, { passive: true });
        window.addEventListener('resize', updateActiveSection);

        return () => {
            window.removeEventListener('scroll', updateActiveSection);
            window.removeEventListener('resize', updateActiveSection);
        };
    }, []);

    const headerBg = isDark ? 'bg-black/40' : 'bg-white/40';
    const borderColor = isDark ? 'border-gray-800' : 'border-gray-200';

    const navLinkClass = (section: string) =>
        `transition ${activeSection === section
            ? 'bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold'
            : isDark
                ? 'text-white/80 hover:text-cyan-400'
                : 'text-gray-700 hover:text-cyan-600'
        }`;

    return (
        <header className={`fixed top-0 z-50 w-full border-b ${borderColor} ${headerBg} backdrop-blur-md`}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
                <a
                    href="#home"
                    className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent"
                >
                    Rayen Ben Cheikh
                </a>

                <div className="hidden gap-8 md:flex">
                    <a href="#home" className={navLinkClass('home')}>
                        {t('nav.home')}
                    </a>
                    <a href="#projects" className={navLinkClass('projects')}>
                        {t('nav.projects')}
                    </a>
                    <a href="#skills" className={navLinkClass('skills')}>
                        {t('nav.skills')}
                    </a>
                    <a href="#contact" className={navLinkClass('contact')}>
                        {t('nav.contact')}
                    </a>
                </div>

                <div className="flex items-center gap-4">
                    <div className={`flex gap-2 rounded-lg p-1 ${isDark ? 'bg-gray-800/50' : 'bg-gray-200/50'}`}>
                        <button
                            onClick={() => setLanguage('en')}
                            className={`rounded px-3 py-1 transition ${language === 'en'
                                    ? 'bg-cyan-500 text-white'
                                    : isDark
                                        ? 'text-gray-400 hover:text-white'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => setLanguage('fr')}
                            className={`rounded px-3 py-1 transition ${language === 'fr'
                                    ? 'bg-cyan-500 text-white'
                                    : isDark
                                        ? 'text-gray-400 hover:text-white'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            FR
                        </button>
                    </div>

                    <button
                        onClick={toggleTheme}
                        className={`rounded-lg p-2 transition ${isDark ? 'bg-gray-800/50 hover:bg-cyan-500/20' : 'bg-gray-200/50 hover:bg-cyan-400/20'
                            }`}
                        title="Toggle theme"
                    >
                        {isDark ? '☀️' : '🌙'}
                    </button>
                </div>
            </nav>
        </header>
    );
}