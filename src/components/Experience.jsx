import { useTranslation } from 'react-i18next';
import { experience } from '../data/cv';
import ProjectGallery from './ProjectGallery';

function JobCard({ job, t }) {
  return (
    <article className="timeline__item">
      <div className="timeline__meta">
        <span className="timeline__type">{t(`experience.${job.id}.type`)}</span>
        <time>{t(`experience.${job.id}.period`)}</time>
      </div>
      <h3>{t(`experience.${job.id}.title`)}</h3>
      {job.images?.length > 0 && (
        <ProjectGallery images={job.images} title={t(`experience.${job.id}.title`)} />
      )}
      <ul>
        <li>{t(`experience.${job.id}.highlight1`)}</li>
        <li>{t(`experience.${job.id}.highlight2`)}</li>
        <li>{t(`experience.${job.id}.highlight3`)}</li>
      </ul>
      <a href={job.link} target="_blank" rel="noreferrer" className="link-arrow">
        {t('experience.viewRepo')}
      </a>
    </article>
  );
}

export default function Experience() {
  const { t } = useTranslation();

  const professionalExperience = experience.filter((job) => job.category === 'professional');
  const academicProjects = experience.filter((job) => job.category === 'academic');

  return (
    <section id="experiencia" className="section">
      <div className="container">
        <div className="section__header">
          <p className="eyebrow">{t('section.experience.eyebrow')}</p>
          <h2>{t('section.experience.title')}</h2>
        </div>
        <div className="timeline">
          {professionalExperience.map((job) => (
            <JobCard key={job.id} job={job} t={t} />
          ))}
        </div>

        {academicProjects.length > 0 && (
          <>
            <div className="section__header section__header--sub">
              <p className="eyebrow">{t('section.academic.eyebrow')}</p>
              <h2>{t('section.academic.title')}</h2>
            </div>
            <div className="timeline">
              {academicProjects.map((job) => (
                <JobCard key={job.id} job={job} t={t} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
