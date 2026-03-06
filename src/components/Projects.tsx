import { projects } from '../data'
import { useLang } from '../context/LangContext'
import FadeIn from './FadeIn'
import './Projects.css'

export default function Projects() {
  const { t } = useLang()

  return (
    <section id="projects" className="section">
      <div className="w">
        <FadeIn>
          <div className="proj-header">
            <div>
              <div className="sec-kicker">{t('Projects', 'Projeler')}</div>
              <h2 className="sec-h">{t(<>Selected <span className="light">Work</span></>, <>{t('Seçili', 'Seçili')} <span className="light">{t('Projeler', 'Projeler')}</span></>)}</h2>
              <p className="sec-sub">{t('14 projects — from enterprise ERP systems to deep learning apps.', '14 proje — kurumsal ERP sistemlerinden derin öğrenme uygulamalarına.')}</p>
            </div>
            <a href="https://github.com/ilknrgzll" target="_blank" rel="noopener noreferrer" className="btn-v ghost">
              GitHub →
            </a>
          </div>
        </FadeIn>

        <div className="proj-grid">
          {projects.map((p, i) => (
            <FadeIn key={p.id} delay={(i % 3) * 0.07} className={p.wide ? 'wide-wrap' : ''}>
              <a
                className={`proj-card ac-${p.accent}${p.wide ? ' wide' : ''}`}
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="pc-top">
                  <div className="pc-top-l">
                    <div className="pc-icon">{p.icon}</div>
                    <div>
                      <div className="pc-title">{p.title}</div>
                      <div className="pc-sub">{p.subtitle}</div>
                    </div>
                  </div>
                  <div className="pc-arrow">↗</div>
                </div>
                <p className="pc-desc">{p.desc}</p>
                <div className="pc-tags">
                  {p.stack.map(s => <span key={s} className="ptag">{s}</span>)}
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
