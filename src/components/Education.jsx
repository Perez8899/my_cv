import { useTranslation } from 'react-i18next';
import { certifications, education } from '../data/cv';

export default function Education() {
  const { t } = useTranslation();

  return (
    <section id="educacion" className="section section--alt">
      <div className="container">
        <div className="section__header">
          <p className="eyebrow">{t('section.education.eyebrow')}</p>
          <h2>{t('section.education.title')}</h2>
        </div>

        <div className="edu__grid">
          <div>
            <h3 className="edu__subtitle">{t('section.education.eduSubtitle')}</h3>
            <div className="edu__list">
              {education.map((item) => (
                <article key={item.degree} className="edu-card">
                  <time>{t(`education.${item.id === 'degree' ? 'period' : 'englishPeriod'}`)}</time>
                  <div className="edu-card__header">
                    <h4>{t(`education.${item.id === 'degree' ? 'degree' : 'english'}`)}</h4>
                    {item.badge === 'graduation' && (
                      <span className="edu-badge" aria-label="Titulación universitaria">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" />
                        </svg>
                      </span>
                    )}
                  </div>
                  <p>{t(`education.${item.id === 'degree' ? 'institution' : 'englishInst'}`)}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="edu__subtitle">{t('section.education.certSubtitle')}</h3>
            <div className="cert__list">
              {certifications.map((cert) => (
                <article key={cert.name} className="cert-card">
                  <div>
                    <h4>{cert.name}</h4>
                    <p>
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
