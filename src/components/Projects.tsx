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
              <h2 className="sec-h">{t("Selected", "Seçili")} <span className="light">{t("Work", "Projeler")}</span></h2>
              <p className="sec-sub">{t(`${projects.length} projects — from enterprise ERP systems to deep learning apps.`, `${projects.length} proje — kurumsal ERP sistemlerinden derin öğrenme uygulamalarına.`)}</p>
            </div>
            <a href="https://github.com/ilknrgzll" target="_blank" rel="noopener noreferrer" className="btn-v ghost">
              GitHub →
            </a>
          </div>
        </FadeIn>

        <div className="proj-grid">
          {projects.map((p, i) => (
            <FadeIn key={p.id} delay={(i % 3) * 0.07} className="project-wrap">
              <a
                className={`proj-card ac-${p.accent}`}
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="pc-top">
                  <div className="pc-top-l">
                    <div className="pc-icon">{p.icon}</div>
                    <div>
                      <div className="pc-title">{t(p.en.title, p.tr.title)}</div>
                      <div className="pc-sub">{t(p.en.subtitle, p.tr.subtitle)}</div>
                    </div>
                  </div>
                  <div className="pc-arrow">↗</div>
                </div>
                <p className="pc-desc">{t(p.en.desc, p.tr.desc)}</p>
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


