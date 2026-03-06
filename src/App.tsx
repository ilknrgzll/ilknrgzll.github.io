import { ThemeProvider } from './context/ThemeContext'
import { LangProvider } from './context/LangContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <Navbar />
        <Hero />
        <main>
          <Experience />
          <Projects />
          <Skills />
          <About />
          <Contact />
        </main>
        <Footer />
      </LangProvider>
    </ThemeProvider>
  )
}

export default App
