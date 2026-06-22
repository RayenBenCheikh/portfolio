'use client';

import { useState } from 'react';
import CVModal from '@/src/components/CvModal';
import { useLanguage } from '@/src/context/LanguageContext';
import { useTheme } from '@/src/context/ThemeContext';

const projectsData = [
  {
    id: 1,
    title: "MindCare AI",
    description: "Mobile mental health companion with real-time physiological monitoring, emotion recognition, and AI chatbot.",
    category: "AI & Full-Stack",
    technologies: ["Python", "React Native", "MongoDB", "Computer Vision"],
  },
  {
    id: 2,
    title: "Heart Disease Prediction",
    description: "ML classification system trained on 319,795 patient records achieving 90% precision.",
    category: "Machine Learning",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    id: 3,
    title: "Hybrid Cloud Infrastructure",
    description: "AWS hybrid cloud with automated CI/CD pipelines, Kubernetes orchestration, and Prometheus monitoring.",
    category: "DevOps & Cloud",
    technologies: ["AWS", "Kubernetes", "Docker", "GitHub Actions"],
  },
  {
    id: 4,
    title: "Club Resource Management",
    description: "Full-stack web app for recruitment, event scheduling, and resource management.",
    category: "Full-Stack Web",
    technologies: ["Django", "MySQL", "JavaScript", "HTML/CSS"],
  }
];

const skillsData = [
  { category: "Languages", skills: "Python, JavaScript, Java, HTML/CSS, SQL, YAML" },
  { category: "AI / ML", skills: "Scikit-learn, NLP, Computer Vision, Pandas, NumPy, Matplotlib" },
  { category: "Web / Mobile", skills: "React Native, Django, Node.js, Express, REST APIs, JWT" },
  { category: "DevOps / Cloud", skills: "AWS, Docker, Kubernetes, Ansible, GitHub Actions, SonarQube" },
  { category: "Databases", skills: "MongoDB, MySQL" },
  { category: "Tools", skills: "Git, Jupyter Notebook, Kaggle, Docker" }
];

export default function Home() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';
  const bgGradient = isDark
    ? 'from-slate-950 via-slate-900 to-black'
    : 'from-slate-50 via-white to-slate-100';
  const headerBg = isDark
    ? 'bg-black/40'
    : 'bg-white/40';
  const borderColor = isDark
    ? 'border-gray-800'
    : 'border-gray-200';
  const cardBg = isDark
    ? 'bg-gray-800/50'
    : 'bg-white/50';
  const textColor = isDark
    ? 'text-gray-300'
    : 'text-gray-700';

  return (
    <div className={`min-h-screen bg-gradient-to-br ${bgGradient} ${isDark ? 'text-white' : 'text-black'}`}>
      {/* Header */}
      <header className={`fixed top-0 w-full ${headerBg} backdrop-blur-md z-50 border-b ${borderColor}`}>
        <nav className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Rayen
          </h1>

          <div className="hidden md:flex gap-8">
            <a href="#home" className={`${isDark ? 'hover:text-cyan-400' : 'hover:text-cyan-600'} transition`}>{t('nav.home')}</a>
            <a href="#projects" className={`${isDark ? 'hover:text-cyan-400' : 'hover:text-cyan-600'} transition`}>{t('nav.projects')}</a>
            <a href="#skills" className={`${isDark ? 'hover:text-cyan-400' : 'hover:text-cyan-600'} transition`}>{t('nav.skills')}</a>
            <a href="#contact" className={`${isDark ? 'hover:text-cyan-400' : 'hover:text-cyan-600'} transition`}>{t('nav.contact')}</a>
          </div>

          {/* Language & Theme Toggle */}
          <div className="flex gap-4 items-center">
            {/* Language Toggle */}
            <div className={`flex gap-2 ${isDark ? 'bg-gray-800/50' : 'bg-gray-200/50'} p-1 rounded-lg`}>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded transition ${language === 'en'
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
                className={`px-3 py-1 rounded transition ${language === 'fr'
                  ? 'bg-cyan-500 text-white'
                  : isDark
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                FR
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition ${isDark ? 'bg-gray-800/50 hover:bg-cyan-500/20' : 'bg-gray-200/50 hover:bg-cyan-400/20'}`}
              title="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
        </nav>
      </header>
      <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40">
        <a
          href="https://linkedin.com/in/rayen-ben-cheikh-062a291bb"
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 rounded-full transition ${isDark ? 'bg-gray-800/50 hover:bg-cyan-500/20' : 'bg-white/70 hover:bg-cyan-500/20'
            }`}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
          </svg>
        </a>

        <a
          href="https://github.com/RayenBenCheikh"
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 rounded-full transition ${isDark ? 'bg-gray-800/50 hover:bg-cyan-500/20' : 'bg-white/70 hover:bg-cyan-500/20'
            }`}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>

        <a
          href="mailto:bencheikhrayen2001@gmail.com"
          className={`p-3 rounded-full transition ${isDark ? 'bg-gray-800/50 hover:bg-cyan-500/20' : 'bg-white/70 hover:bg-cyan-500/20'
            }`}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </a>
      </div>
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className={`inline-block mb-6 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border ${borderColor} rounded-full`}>
              <span className="text-cyan-400 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                {t('hero.available')}
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-4">
              {t('hero.title')} <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Rayen</span>
            </h1>

            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>{t('hero.subtitle')}</p>

            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-lg mb-8 max-w-lg`}>
              {t('hero.description')}
            </p>

            <div className="flex gap-4 mb-8">
              <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg font-bold transition transform hover:scale-105">
                {t('hero.viewWork')}
              </a>
              <CVModal />
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <span className="text-9xl">👨‍💻</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-8 ${isDark ? 'bg-gray-900/30' : 'bg-gray-100/30'}`}>
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl font-bold mb-12">{t('projects.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <div key={project.id} className={`group ${cardBg} ${borderColor} border p-8 rounded-xl hover:border-cyan-400 transition duration-300`}>
                <h4 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition">{project.title}</h4>
                <p className="text-cyan-400 text-sm mb-4">{project.category}</p>
                <p className={`${textColor} mb-6`}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className={`${isDark ? 'bg-cyan-900/30 text-cyan-300' : 'bg-cyan-100/50 text-cyan-700'} px-3 py-1 rounded-full text-sm`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl font-bold mb-12">{t('skills.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((skill) => (
              <div key={skill.category} className={`p-6 ${cardBg} ${borderColor} border rounded-xl hover:border-cyan-400 transition`}>
                <h4 className="text-xl font-bold text-cyan-400 mb-4">{skill.category}</h4>
                <p className={textColor}>{skill.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-8 ${isDark ? 'bg-gray-900/30' : 'bg-gray-100/30'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-5xl font-bold mb-8">{t('contact.title')}</h3>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-lg mb-8 max-w-2xl mx-auto`}>
            {t('contact.description')}
          </p>
          <a href="mailto:bencheikhrayen2001@gmail.com" className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg font-bold transition transform hover:scale-105">
            {t('contact.button')}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${borderColor} border-t py-8 px-8 text-center ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
        <p>{t('footer.copyright')}</p>
      </footer>
    </div>
  );
}