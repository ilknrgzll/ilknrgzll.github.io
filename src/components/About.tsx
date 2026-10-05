import { useLang } from "../context/LangContext";
import "./About.css";
import FadeIn from "./FadeIn";
import portfolio from "../content/portfolio.json";

const strengths = {
  en: [
    "Creativity",
    "Strategic Thinking",
    "Self-Development",
    "Result-Oriented",
    "Initiative",
    "Empathy",
    "Collaboration",
    "Confidence",
    "Resilience",
  ],
  tr: [
    "Yaratıcılık",
    "Stratejik Düşünce",
    "Öz Gelişim",
    "Sonuç Odağı",
    "Girişim",
    "Empati",
    "İşbirliği",
    "Özgüven",
    "Dayanıklılık",
  ],
};
const certs = [
  "Introduction to Cybersecurity — Cisco Networking Academy",
  "ASP.NET Core + EF Core Web Development — Infotech Academy",
  "Python — IEEE Turkey Student Branches Computer Society",
  "Git & GitHub — Electrical and Electronics Engineering Club",
  "Autodesk Fusion 360 — IEEE IZU Student Branch",
];
const langs = [
  { name: "Turkish/Türkçe", dots: 5 },
  { name: "English", dots: 2 },
  { name: "Deutsch", dots: 1 },
  { name: "العربية", dots: 1 },
];

export default function About() {
  const { lang, t } = useLang();

  return (
    <section id="about" className="section">
      <div className="w">
        <FadeIn>
          <div className="sec-kicker">{t("About", "Hakkımda")}</div>
          <h2 className="sec-h">
            {t(
              <>
                Who I <span className="light">Am</span>
              </>,
              <>
                Kim <span className="light">Olduğum</span>
              </>,
            )}
          </h2>
          <p className="sec-sub" style={{ marginBottom: "2rem" }}>
            {t(
              "Background, education, languages and what drives me.",
              "Geçmiş, eğitim, diller ve beni motive eden şeyler.",
            )}
          </p>
        </FadeIn>
        <div className="about-grid">
          <div className="about-col">
            <FadeIn delay={0.05}>
              <div className="acard">
                <div className="acard-title">{t("Background", "Hakkımda")}</div>
                {portfolio.about[lang].map((paragraph, index) => (
                  <p className="ap" key={index}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="acard">
                <div className="acard-title">
                  {t("Strengths", "Güçlü Yönlerim")}
                </div>
                <div className="strengths">
                  {strengths[lang].map((s) => (
                    <span key={s} className="strength">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
          <div className="about-col">
            <FadeIn delay={0.08}>
              <div className="acard">
                <div className="acard-title">
                  {t("Languages", "Dil Becerileri")}
                </div>
                {langs.map((l) => (
                  <div className="lang-row" key={l.name}>
                    <span className="lang-name">{l.name}</span>
                    <div className="dots">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={`dot${i < l.dots ? " on" : ""}`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div className="acard">
                <div className="acard-title">{t("Education", "Eğitim")}</div>
                <div className="edu-deg">
                  {t(
                    "BSc Computer Engineering",
                    "Bilgisayar Mühendisliği Lisans",
                  )}
                </div>
                <div className="edu-uni">Bozok Üniversitesi, Yozgat</div>
                <div className="edu-year">2023</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.16}>
              <div className="acard">
                <div className="acard-title">
                  {t("Certificates", "Sertifikalar")}
                </div>
                {certs.map((c) => (
                  <div className="cert-row" key={c}>
                    <div className="cert-dot" />
                    <div className="cert-text">{c}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

