import { useTranslation } from 'react-i18next';
import { profile } from '../data/cv';

export default function Hero() {
  const { t, i18n } = useTranslation();
  const cvUrl = i18n.language === 'en' ? profile.cvPdfEn : profile.cvPdf;
  const cvFilename = i18n.language === 'en' ? 'Hector-Jose-Perez-CV-EN.pdf' : 'Hector-Jose-Perez-CV.pdf';

  return (
    <section id="inicio" className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">{t('hero.eyebrow')}</p>
          <h1>{profile.name}</h1>
          <p className="hero__title">{t('profile.title')}</p>
          <p className="hero__location">{profile.location}</p>

          <div className="hero__actions">
            <a
              href={cvUrl}
              download={cvFilename}
              className="btn btn--primary"
            >
              {t('hero.downloadCv')}
            </a>
            <a href="#experiencia" className="btn btn--ghost">
              {t('hero.viewProjects')}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn--ghost">
              GitHub
            </a>
          </div>
        </div>

        <div className="hero__card">
          <div className="hero__avatar" aria-hidden="true">
            <span>HJP</span>
          </div>
          <ul className="hero__stats">
            <li>
              <strong>3+</strong>
              <span>{t('hero.stat.projects')}</span>
            </li>
            <li>
              <strong>Java</strong>
              <span>Spring Boot & APIs REST</span>
            </li>
            <li>
              <strong>Docker</strong>
              <span>{t('hero.stat.docker')}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
