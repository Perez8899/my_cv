import { useTranslation } from 'react-i18next';
import { skills } from '../data/cv';

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="habilidades" className="section section--alt">
      <div className="container">
        <div className="section__header">
          <p className="eyebrow">{t('section.skills.eyebrow')}</p>
          <h2>{t('section.skills.title')}</h2>
        </div>
        <div className="skills__grid">
          {skills.map((group) => (
            <article key={group.category} className="skill-card">
              <h3>{t(`skills.${group.id}`)}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    {item.startsWith('skills.item.') ? t(item) : item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
