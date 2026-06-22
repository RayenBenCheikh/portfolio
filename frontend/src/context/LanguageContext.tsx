'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'hero.available': 'Available for work',
    'hero.title': 'Hi, I\'m',
    'hero.subtitle': 'Full-Stack Developer & AI Engineer',
    'hero.description': 'I build exceptional digital experiences with modern technologies. Passionate about creating scalable, user-centered applications and intelligent systems.',
    'hero.viewWork': 'View My Work',
    'hero.downloadCv': 'Download CV',
    'projects.title': 'Featured Projects',
    'skills.title': 'Technical Skills',
    'contact.title': 'Let\'s Work Together',
    'contact.description': 'Have a project in mind? Let\'s collaborate and create something amazing.',
    'contact.button': 'Get In Touch',
    'footer.copyright': '© 2026 Rayen Ben Cheikh. All rights reserved.',
    'modal.title': 'My CV',
    'modal.download': '⬇️ Download PDF',
    'modal.close': 'Close',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.projects': 'Projets',
    'nav.skills': 'Compétences',
    'nav.contact': 'Contact',
    'hero.available': 'Disponible pour travailler',
    'hero.title': 'Bonjour, je suis',
    'hero.subtitle': 'Développeur Full-Stack & Ingénieur IA',
    'hero.description': 'Je crée des expériences numériques exceptionnelles avec les technologies modernes. Passionné par la création d\'applications évolutives et centrées sur l\'utilisateur et de systèmes intelligents.',
    'hero.viewWork': 'Voir mon travail',
    'hero.downloadCv': 'Télécharger CV',
    'projects.title': 'Projets en vedette',
    'skills.title': 'Compétences techniques',
    'contact.title': 'Travaillons ensemble',
    'contact.description': 'Vous avez un projet en tête ? Collaborons et créons quelque chose d\'extraordinaire.',
    'contact.button': 'Me contacter',
    'footer.copyright': '© 2026 Rayen Ben Cheikh. Tous droits réservés.',
    'modal.title': 'Mon CV',
    'modal.download': '⬇️ Télécharger PDF',
    'modal.close': 'Fermer',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}