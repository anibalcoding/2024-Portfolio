import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TechStack from '@/components/TechStack'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import WorkExperience from '@/components/WorkExperience'
import Chatbot from '@/components/Chatbot'


export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TechStack />
      <Skills />
      <Projects />
      <WorkExperience />
      <Chatbot />
    </main>
  )
}
