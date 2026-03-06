import { useLang } from '../context/LangContext'
import './Footer.css'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer">
      <p className="foot-t">© {new Date().getFullYear()} <span>İlknur Güzel</span> — {t('All rights reserved', 'Tüm hakları saklıdır')}</p>
      <p className="foot-t">{t('Full Stack Software Engineer · Ankara, Turkey', 'Full Stack Yazılım Geliştirici · Ankara, Türkiye')}</p>
    </footer>
  )
}
