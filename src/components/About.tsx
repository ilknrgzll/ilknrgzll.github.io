import { useLang } from "../context/LangContext";
import "./About.css";
import FadeIn from "./FadeIn";

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
                {lang === "en" ? (
                  <>
                    <p className="ap">
                      I'm a <strong>Computer Engineer</strong> (Bozok
                      University, 2023) born and based in Ankara. I build
                      enterprise-grade software that actually runs in
                      production.
                    </p>
                    <p className="ap">
                      Currently at <strong>MODALife</strong> as a Full-Stack
                      Software Engineer, working on live, high-traffic systems:
                      ERP integrations, marketplace APIs, admin tools — all with{" "}
                      <strong>Clean Architecture</strong>.
                    </p>
                    <p className="ap">
                      My background spans full-stack web,{" "}
                      <strong>deep learning</strong> (CNN, YOLOv5), and mobile
                      (Flutter/Bloc). I care about clean, secure, maintainable
                      code.
                    </p>
                    <p className="ap">
                      Outside code: strategic thinking, creativity, continuous
                      self-improvement — four languages in active use.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="ap">
                      Ankara doğumlu ve yaşayan bir{" "}
                      <strong>Bilgisayar Mühendisiyim</strong> (Bozok
                      Üniversitesi, 2023). Gerçekten production'da çalışan
                      kurumsal yazılımlar geliştiriyorum.
                    </p>
                    <p className="ap">
                      Şu anda <strong>MODALife</strong>'ta Full-Stack Yazılım
                      Geliştirici olarak çalışıyor, canlı yüksek trafikli
                      sistemlerde ERP entegrasyonları ve admin araçları
                      üretiyorum — hepsi <strong>Clean Architecture</strong>{" "}
                      ile.
                    </p>
                    <p className="ap">
                      Full-stack <strong>web</strong>,{" "}
                      <strong>derin öğrenme</strong> (CNN, YOLOv5) alanlarında
                      deneyimliyim. Temiz, güvenli ve sürdürülebilir kod yazmayı
                      önemsiyorum.
                    </p>
                    <p className="ap">
                      Kodun dışında: stratejik düşünce, yaratıcılık, sürekli öz
                      gelişim — dört dil aktif kullanımda.
                    </p>
                  </>
                )}
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
