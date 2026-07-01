'use client';

// filepath: c:\Users\bchal\OneDrive\Documents\rayen fichier\portfolio\frontend\src\components\CvModal.tsx
import { useState } from 'react';
import { useTheme } from '@/src/context/ThemeContext';
import { useLanguage } from '@/src/context/LanguageContext';

export default function CVModal() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useTheme();
    const { t, language } = useLanguage();
    const isDark = theme === 'dark';

    const pdfSrc =
        language === 'fr'
            ? '/pdf/Rayen_Ben_Cheikh_CV_FR.pdf'
            : '/pdf/Rayen_Ben_Cheikh_CV.pdf';

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className={`rounded-lg border-2 border-cyan-400 px-8 py-3 font-bold transition ${isDark ? 'hover:bg-cyan-400/10' : 'hover:bg-cyan-400/20'
                    }`}
            >
                {t('hero.downloadCv')}
            </button>

            {isOpen && (
                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${isDark ? 'bg-black/80' : 'bg-black/60'
                        }`}
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className={`flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-lg ${isDark ? 'bg-gray-900' : 'bg-white'
                            }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            className={`flex items-center justify-between border-b p-6 ${isDark ? 'border-gray-700' : 'border-gray-300'
                                }`}
                        >
                            <h2 className="text-2xl font-bold">{t('modal.title')}</h2>
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className={`text-2xl font-bold transition ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                ✕
                            </button>
                        </div>

                        <div className={`flex-1 overflow-auto p-6 ${isDark ? 'bg-gray-800/50' : 'bg-gray-100/50'}`}>
                            <iframe
                                src={`${pdfSrc}#toolbar=0`}
                                className="h-[500px] w-full rounded border-0"
                                title="CV Document"
                            />
                        </div>

                        <div
                            className={`flex gap-4 border-t p-6 ${isDark ? 'border-gray-700 bg-gray-800/30' : 'border-gray-300 bg-gray-100/30'
                                }`}
                        >
                            <a
                                href={pdfSrc}
                                download
                                className="rounded-lg bg-cyan-500 px-6 py-2 font-bold text-white transition hover:bg-cyan-600"
                            >
                                {t('modal.download')}
                            </a>
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className={`rounded-lg border px-6 py-2 transition ${isDark
                                        ? 'border-gray-600 hover:border-gray-400'
                                        : 'border-gray-400 hover:border-gray-600'
                                    }`}
                            >
                                {t('modal.close')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}