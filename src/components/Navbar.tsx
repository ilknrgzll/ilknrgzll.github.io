import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useLang } from '../context/LangContext'
import './Navbar.css'

const navIds = ['experience', 'projects', 'skills', 'about', 'contact']

export default function Navbar() {
  const { theme, toggle: toggleTheme } = useTheme()
  const { lang, toggle: toggleLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const labels = lang === 'en'
    ? ['Experience', 'Projects', 'Skills', 'About', 'Contact']
    : ['Deneyim', 'Projeler', 'Beceriler', 'Hakkımda', 'İletişim']

  return (
    <>
      <motion.nav
        className={`navbar${scrolled ? ' scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .6, ease: [.16, 1, .3, 1] }}
      >
        <a href="#hero" className="nav-logo">İlknur<em>.</em>dev</a>

        <ul className="nav-menu">
          {labels.map((label, i) => (
            <li key={navIds[i]}>
              <a href={`#${navIds[i]}`}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-controls">
          <button className="nav-pill" onClick={toggleLang} title="Toggle language">
            <span className={lang === 'en' ? 'pill-active' : ''}>EN</span>
            <span className="pill-sep">/</span>
            <span className={lang === 'tr' ? 'pill-active' : ''}>TR</span>
          </button>

          <button className="nav-icon-btn" onClick={toggleTheme} title="Toggle theme">
            <AnimatePresence mode="wait">
              <motion.span
                key={theme}
                initial={{ rotate: -30, opacity: 0, scale: .7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 30, opacity: 0, scale: .7 }}
                transition={{ duration: .2 }}
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </motion.span>
            </AnimatePresence>
          </button>

          <a href="/İlknur_Güzel_CV.pdf" download className="nav-cv">↓ CV</a>

          <button className={`nav-hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(o => !o)}>
            <span /><span /><span />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: .18 }}
          >
            {labels.map((label, i) => (
              <a key={navIds[i]} href={`#${navIds[i]}`} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
