'use client';

import { useState } from 'react';
import { useLanguage } from '@/src/context/LanguageContext';
import { useTheme } from '@/src/context/ThemeContext';

export default function CVModal() {
    const [isOpen, setIsOpen] = useState(false);
    const { language, t } = useLanguage();
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const pdfSrc = language === 'fr' ? '/pdf/Rayen_Ben_Cheikh_CV_FR.pdf' : '/pdf/Rayen_Ben_Cheikh_CV.pdf';
    const pdfName = language === 'fr' ? 'Rayen_Ben_Cheikh_CV_FR.pdf' : 'Rayen_Ben_Cheikh_CV.pdf';

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className={`rounded-lg border-2 border-cyan-400 px-8 py-3 font-bold transition ${isDark ? 'hover:bg-cyan-400/10' : 'hover:bg-cyan-400/20'}`}
            >
                {t('hero.downloadCv')}
            </button>

            {isOpen && (
                <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${isDark ? 'bg-black/80' : 'bg-black/60'}`}>
                    <div className={`flex max-h-[90vh] w-full max-w-4xl flex-col rounded-lg ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                        <div className={`flex items-center justify-between border-b p-6 ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
                            <h2 className="text-2xl font-bold">{t('modal.title')}</h2>
                            <button onClick={() => setIsOpen(false)} className={`text-2xl font-bold ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                                ✕
                            </button>
                        </div>

                        <div className={`flex-1 overflow-auto p-6 ${isDark ? 'bg-gray-800/50' : 'bg-gray-100/50'}`}>
                            <iframe
                                src={`${pdfSrc}#toolbar=0`}
                                title="CV Document"
                                className="h-[500px] w-full rounded"
                                style={{ border: 'none' }}
                            />
                        </div>

                        <div className={`flex gap-4 border-t p-6 ${isDark ? 'border-gray-700 bg-gray-800/30' : 'border-gray-300 bg-gray-100/30'}`}>
                            <a href={pdfSrc} download={pdfName} className="rounded-lg bg-cyan-500 px-6 py-2 font-bold text-white transition hover:bg-cyan-600">
                                {t('modal.download')}
                            </a>
                            <button onClick={() => setIsOpen(false)} className={`rounded-lg px-6 py-2 transition ${isDark ? 'border border-gray-600 hover:border-gray-400' : 'border border-gray-400 hover:border-gray-600'}`}>
                                {t('modal.close')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}