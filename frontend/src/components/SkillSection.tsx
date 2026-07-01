'use client';

import { useLanguage } from '@/src/context/LanguageContext';
import { useTheme } from '@/src/context/ThemeContext';
import { skillsByLanguage } from '@/src/data/portfolio';

export default function SkillsSection() {
    const { language, t } = useLanguage();
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const skills = skillsByLanguage[language];
    const borderColor = isDark ? 'border-gray-800' : 'border-gray-200';
    const cardBg = isDark ? 'bg-gray-800/50' : 'bg-white/50';

    return (
        <section id="skills" className="px-8 py-20">
            <div className="mx-auto max-w-7xl">
                <h3 className="mb-12 text-5xl font-bold">{t('skills.title')}</h3>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {skills.map((skill) => (
                        <div key={skill.category} className={`rounded-xl border p-6 transition hover:border-cyan-400 ${cardBg} ${borderColor}`}>
                            <h4 className="mb-4 text-xl font-bold text-cyan-400">{skill.category}</h4>
                            <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>{skill.skills.join(', ')}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}