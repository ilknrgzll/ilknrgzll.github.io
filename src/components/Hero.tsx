import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";
import "./Hero.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
});

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="hero" className="hero">
      <div className="hero-glow" aria-hidden />
      <div className="hero-glow hero-glow-2" aria-hidden />

      <div className="hero-layout">
        {/* Left: text */}
        <div className="hero-text">
          <motion.div className="hero-tag" {...fadeUp(0)}>
            <span className="hero-tag-dot" />
            {t("Available for new opportunities", "Yeni fırsatlara açık")}
          </motion.div>

          <motion.h1 className="hero-name" {...fadeUp(0.1)}>
            İlknur
            <br />
            <span className="hero-name-dim">Güzel</span>
          </motion.h1>

          <motion.p className="hero-title" {...fadeUp(0.2)}>
            {t(
              "Full Stack Software Engineer",
              "Full Stack Yazılım Geliştirici",
            )}
          </motion.p>

          <motion.p className="hero-desc" {...fadeUp(0.3)}>
            {t(
              <>
                Building <strong>enterprise-grade software</strong> with C#,
                ASP.NET Core and React (TypeScript). Specialised in{" "}
                <strong>Clean Architecture</strong>, integrations and
                high-traffic production systems.
              </>,
              <>
                <strong>C#, ASP.NET Core</strong> ve React (TypeScript) ile
                kurumsal ölçekte yazılım geliştiriyorum.{" "}
                <strong>Clean Architecture</strong>, entegrasyonlar ve yüksek
                trafikli sistemler konusunda deneyimliyim.
              </>,
            )}
          </motion.p>

          <motion.div className="hero-actions" {...fadeUp(0.4)}>
            <a href="#projects" className="btn-v fill">
              {t("View Projects →", "Projeleri Gör →")}
            </a>
            <a href="#contact" className="btn-v ghost">
              {t("Get in Touch", "İletişime Geç")}
            </a>
            {/* <a href="/İlknur_Güzel_CV.pdf" download className="btn-v ghost">
              {t("Download CV", "CV İndir")}
            </a> */}
          </motion.div>

          <motion.div className="hero-stats" {...fadeUp(0.5)}>
            {[
              { n: "2+", l: t("Years Experience", "Yıl Deneyim") },
              { n: "14+", l: t("Projects Built", "Proje") },
              { n: "4", l: t("Languages", "Dil") },
              { n: "15+", l: t("Technologies", "Teknoloji") },
            ].map((s) => (
              <div key={s.l} className="hero-stat">
                <div className="stat-n">{s.n}</div>
                <div className="stat-l">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: photo */}
        <motion.div
          className="hero-photo-wrap"
          initial={{ opacity: 0, scale: 0.92, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <div className="hero-photo-ring" />
          <img
            src="/me.jpeg"
            alt="İlknur Güzel"
            className="hero-photo"
            onError={(e) => {
              // Fallback: show initials if photo not found
              const el = e.currentTarget as HTMLImageElement;
              el.style.display = "none";
              const parent = el.parentElement!;
              const fallback = document.createElement("div");
              fallback.className = "hero-photo-fallback";
              fallback.textContent = "İG";
              parent.appendChild(fallback);
            }}
          />
          {/* <div className="hero-photo-badge">
            <span className="hero-photo-badge-dot" />
            {t('Open to work', 'İş arıyorum')}
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
