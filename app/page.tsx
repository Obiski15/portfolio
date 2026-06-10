import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ExpertiseSection from '@/components/sections/ExpertiseSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExpertiseSection />
      <ContactSection />
    </div>
  )
}
