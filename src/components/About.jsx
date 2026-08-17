import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="sobre-mi" className="section">
      <div className="container">
        <div className="section__header">
          <p className="eyebrow">{t('section.about.eyebrow')}</p>
          <h2>{t('section.about.title')}</h2>
        </div>
        <div className="about__card">
          <p>{t('profile.summary')}</p>
          <div className="about__tags">
            <span>Java</span>
            <span>C#</span>
            <span>Spring Boot</span>
            <span>React</span>
            <span>{t('about.tag.microservices')}</span>
            <span>Scrum</span>
          </div>
        </div>
      </div>
    </section>
  );
}
