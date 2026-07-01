'use client';

import { useLanguage } from '@/src/context/LanguageContext';
import { useTheme } from '@/src/context/ThemeContext';
import SocialLinks from '@/src/components/SocialLinks';

export default function Footer() {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <footer
            className={`border-t px-8 py-8 text-center ${isDark ? 'border-gray-800 text-gray-500' : 'border-gray-200 text-gray-600'
                }`}
        >
            <div className="mb-4">
                <SocialLinks variant="inline" />
            </div>
            <p>{t('footer.copyright')}</p>
        </footer>
    );
}