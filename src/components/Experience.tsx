import { useLang } from '../context/LangContext'
import FadeIn from './FadeIn'
import './Experience.css'

const data = {
  en: [
    {
      company: 'MODALife — Genel Merkez Bilgi İşlem',
      role: 'Full-Stack Software Engineer',
      period: '2024 — Present',
      active: true,
      bullets: [
        'Developed and maintained live, high-traffic enterprise software used in daily corporate operations.',
        'Built ASP.NET Core Web API services and React (TypeScript) frontends for internal tools.',
        'Designed REST and SOAP integrations for ERPs and 4 major marketplaces (Trendyol, Hepsiburada, N11, Koçtaş).',
        'Implemented role-based authorization, Redux state management and process tracking flows.',
        'Structured all projects with Clean Architecture across multi-layered systems.',
      ],
    },
    {
      company: 'BOTAŞ — Bilgi İşlem Daire Başkanlığı',
      role: 'Software Developer Intern',
      period: '2023',
      active: false,
      bullets: [
        "Contributed to software development within Turkey's national pipeline corporation IT department.",
        'Gained exposure to enterprise-scale software infrastructure and processes.',
      ],
    },
    {
      company: 'Hacettepe Teknokent — Bil Yazılım',
      role: 'Software Developer Intern',
      period: '2022',
      active: false,
      bullets: [
        'Software company internship within Hacettepe Technology Development Zone.',
        'Participated in real-world agile workflows and software delivery processes.',
      ],
    },
  ],
  tr: [
    {
      company: 'MODALife — Genel Merkez Bilgi İşlem',
      role: 'Full-Stack Yazılım Geliştirici',
      period: '2024 — Günümüz',
      active: true,
      bullets: [
        'Kurumsal operasyonlarda aktif olarak kullanılan, canlı ve yüksek trafikli yazılım sistemleri geliştirdim.',
        'ASP.NET Core Web API servisleri ve React (TypeScript) arayüzleri oluşturdum.',
        'ERP ve 4 büyük pazaryeri (Trendyol, Hepsiburada, N11, Koçtaş) için REST/SOAP entegrasyonları tasarladım.',
        'Rol bazlı yetkilendirme, Redux state yönetimi ve süreç takip sistemleri geliştirdim.',
        'Tüm projeleri Clean Architecture ile çok katmanlı mimaride yapılandırdım.',
      ],
    },
    {
      company: 'BOTAŞ — Bilgi İşlem Daire Başkanlığı',
      role: 'Stajyer Yazılım Geliştirici',
      period: '2023',
      active: false,
      bullets: [
        "Türkiye'nin ulusal boru hattı kurumunun BT departmanında yazılım geliştirme süreçlerine katkıda bulundum.",
        'Kurumsal ölçekte yazılım altyapısı ve süreçleri hakkında deneyim kazandım.',
      ],
    },
    {
      company: 'Hacettepe Teknokent — Bil Yazılım',
      role: 'Stajyer Yazılım Geliştirici',
      period: '2022',
      active: false,
      bullets: [
        'Hacettepe Teknoloji Geliştirme Bölgesi bünyesinde bir yazılım şirketinde staj yaptım.',
        'Gerçek dünya agile süreçleri ve yazılım teslimat pratiklerine katıldım.',
      ],
    },
  ],
}

export default function Experience() {
  const { lang, t } = useLang()
  const items = data[lang]

  return (
    <section id="experience" className="section">
      <div className="w">
        <FadeIn>
          <div className="sec-kicker">{t('Experience', 'Deneyim')}</div>
          <h2 className="sec-h">{t(<>Where I've <span className="light">Worked</span></>, <>{t('Çalıştığım', 'Çalıştığım')} <span className="light">{t('Places', 'Yerler')}</span></>)}</h2>
          <p className="sec-sub" style={{ marginBottom: '2rem' }}>{t('Professional experience at enterprise companies and internships.', 'Kurumsal şirketlerde profesyonel deneyim ve stajlar.')}</p>
        </FadeIn>

        <div className="exp-stack">
          {items.map((exp, i) => (
            <FadeIn key={exp.company} delay={i * 0.08}>
              <div className="exp-card">
                <div className="exp-left">
                  <div className="exp-co">{exp.company}</div>
                  <div className="exp-role">{exp.role}</div>
                  <ul className="exp-ul">
                    {exp.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                  </ul>
                </div>
                <div className="exp-right">
                  <div className="exp-period">{exp.period}</div>
                  <span className={`exp-badge ${exp.active ? 'active' : ''}`}>
                    {exp.active ? (t('● Active', '● Aktif')) : t('Internship', 'Staj')}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
