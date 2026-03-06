import { socials } from '../data'
import { useLang } from '../context/LangContext'
import FadeIn from './FadeIn'
import './Contact.css'

export default function Contact() {
  const { t } = useLang()
  return (
    <section id="contact" className="section">
      <div className="w">
        <div className="contact-layout">
          <FadeIn>
            <div className="sec-kicker">{t('Contact', 'İletişim')}</div>
            <div className="contact-heading">
              {t(<>Let's build<br /><span>something</span><br />great.</>, <>Birlikte<br /><span>harika</span><br />şeyler yapalım.</>)}
            </div>
            <p className="contact-note">
              {t('Open to full-time roles, freelance projects, and interesting technical challenges. Especially drawn to backend-heavy, enterprise applications.', 'Tam zamanlı roller, serbest projeler ve ilginç teknik zorluklara açığım. Özellikle backend ağırlıklı kurumsal uygulamalar ilgimi çekiyor.')}
            </p>
            <a href="mailto:ilknrgzl99@gmail.com" className="btn-v fill" style={{ width: 'fit-content' }}>
              {t('Send Email →', 'E-posta Gönder →')}
            </a>
          </FadeIn>
          <FadeIn delay={.1}>
            <div className="socials">
              {socials.map(s => (
                <a key={s.name} className="soc-row" href={s.url} target="_blank" rel="noopener noreferrer">
                  <div className="soc-l">
                    <div className="soc-ico">{s.icon}</div>
                    <div>
                      <div className="soc-name">{s.name}</div>
                      <div className="soc-url">{s.display}</div>
                    </div>
                  </div>
                  <span className="soc-arr">↗</span>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
