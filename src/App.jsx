import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Lab from './components/Lab.jsx'
import Models from './components/Models.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import { profile } from './data.js'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Lab />
        <Models />
        <Gallery />
        <Contact />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}. Built with React &amp; Three.js.
      </footer>
    </>
  )
}
