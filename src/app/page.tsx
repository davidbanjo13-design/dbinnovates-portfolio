import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import CalendlyEmbed from '@/components/CalendlyEmbed'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <ContactForm />
      <CalendlyEmbed />
      <Footer />
    </main>
  )
}

