'use client';

import Header from '@/src/components/Header';
import SocialLinks from '@/src/components/SocialLinks';
import HeroSection from '@/src/components/HeroSection';
import ProjectsSection from '@/src/components/ProjectSection';
import SkillsSection from '@/src/components/SkillSection';
import ContactSection from '@/src/components/ContactSection';
import Footer from '@/src/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <SocialLinks />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}