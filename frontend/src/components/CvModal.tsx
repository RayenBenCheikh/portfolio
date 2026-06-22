'use client';

import { useState } from 'react';
import { useTheme } from '@/src/context/ThemeContext';
import { useLanguage } from '@/src/context/LanguageContext';

export default function CVModal() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useTheme();
    const { t } = useLanguage();
    const isDark = theme === 'dark';

    return (
        <>
            {/* Button to open modal */}
            <button
                onClick={() => setIsOpen(true)}
                className={`px-8 py-3 border-2 border-cyan-400 rounded-lg font-bold transition ${isDark ? 'hover:bg-cyan-400/10' : 'hover:bg-cyan-400/20'
                    }`}
            >
                {t('hero.downloadCv')}
            </button>

            {/* Modal */}
            {isOpen && (
                <div className={`fixed inset-0 ${isDark ? 'bg-black/80' : 'bg-black/60'} z-50 flex items-center justify-center p-4`}>
                    <div className={`rounded-lg w-full max-w-4xl max-h-[90vh] flex flex-col ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                        {/* Header */}
                        <div className={`flex justify-between items-center p-6 border-b ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
                            <h2 className="text-2xl font-bold">{t('modal.title')}</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className={`text-2xl font-bold cursor-pointer transition ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                ✕
                            </button>
                        </div>

                        {/* PDF Viewer */}
                        <div className={`flex-1 overflow-auto p-6 flex items-center justify-center ${isDark ? 'bg-gray-800/50' : 'bg-gray-100/50'}`}>
                            <div className="text-center w-full">
                                <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>PDF Preview</p>
                                <iframe
                                    src="/pdf/cv.pdf#toolbar=0"
                                    className={`w-full h-[500px] rounded ${isDark ? 'bg-white' : 'bg-gray-50'}`}
                                    title="CV Document"
                                    style={{ border: 'none' }}
                                    onError={() => console.error('PDF failed to load from /pdf/cv.pdf')}
                                />
                            </div>
                        </div>

                        {/* Footer */}
                        <div className={`flex gap-4 p-6 border-t ${isDark ? 'border-gray-700 bg-gray-800/30' : 'border-gray-300 bg-gray-100/30'}`}>
                            <a
                                href="/pdf/cv.pdf"
                                download="Rayen_Ben_Cheikh_CV.pdf"
                                className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-bold transition cursor-pointer text-white"
                            >
                                {t('modal.download')}
                            </a>
                            <button
                                onClick={() => setIsOpen(false)}
                                className={`px-6 py-2 rounded-lg transition cursor-pointer ${isDark
                                        ? 'border border-gray-600 hover:border-gray-400'
                                        : 'border border-gray-400 hover:border-gray-600'
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