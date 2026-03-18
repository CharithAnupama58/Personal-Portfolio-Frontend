import { BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Cursor        from '@/components/UI/Cursor'
import ProgressBar   from '@/components/UI/ProgressBar'
import BackToTop     from '@/components/UI/BackToTop'
import CanvasBg      from '@/components/UI/CanvasBg'
import Navbar        from '@/components/Navbar/Navbar'
import Hero          from '@/components/Hero/Hero'
import About         from '@/components/About/About'
import Experience    from '@/components/Experience/Experience'
import Projects      from '@/components/Projects/Projects'
import Blog          from '@/components/Blog/Blog'
import Achievements  from '@/components/Achievements/Achievements'
import Contact       from '@/components/Contact/Contact'
import Footer        from '@/components/Footer/Footer'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <BrowserRouter>
      <CanvasBg />
      <Cursor />
      <ProgressBar />
      <BackToTop />
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Blog />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </BrowserRouter>
  )
}