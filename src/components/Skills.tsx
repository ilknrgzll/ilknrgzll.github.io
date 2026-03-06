import { skills } from '../data'
import { useLang } from '../context/LangContext'
import FadeIn from './FadeIn'
import './Skills.css'

export default function Skills() {
  const { t } = useLang()
  return (
    <section id="skills" className="section">
      <div className="w">
        <FadeIn>
          <div className="sec-kicker">{t('Skills', 'Beceriler')}</div>
          <h2 className="sec-h">{t(<>Technical <span className="light">Stack</span></>, <>{t('Teknik', 'Teknik')} <span className="light">{t('Yetenek', 'Yetenek')}</span></>)}</h2>
          <p className="sec-sub" style={{ marginBottom: '2rem' }}>{t('Technologies I work with in production and personal projects.', 'Üretim ve kişisel projelerde kullandığım teknolojiler.')}</p>
        </FadeIn>
        <div className="skills-grid">
          {skills.map((sk, i) => (
            <FadeIn key={sk.name} delay={i * 0.07}>
              <div className="sk-card">
                <div className="sk-head">
                  <span className="sk-emoji">{sk.icon}</span>
                  <span className="sk-name">{sk.name}</span>
                </div>
                <ul className="sk-list">
                  {sk.items.map(item => (
                    <li key={item}><span className={`sk-dot ${sk.dot}`} />{item}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
