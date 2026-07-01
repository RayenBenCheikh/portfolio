'use client';

import { useLanguage } from '@/src/context/LanguageContext';
import { useTheme } from '@/src/context/ThemeContext';

export default function ContactSection() {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section id="contact" className={`px-8 py-20 ${isDark ? 'bg-gray-900/30' : 'bg-gray-100/30'}`}>
            <div className="mx-auto max-w-7xl text-center">
                <h3 className="mb-8 text-5xl font-bold">{t('contact.title')}</h3>
                <p className={`mx-auto mb-8 max-w-2xl text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t('contact.description')}
                </p>
                <a
                    href="mailto:bencheikhrayen2001@gmail.com"
                    className="inline-block rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 font-bold transition hover:scale-105 hover:from-cyan-600 hover:to-blue-600"
                >
                    {t('contact.button')}
                </a>
            </div>
        </section>
    );
}