import { experience } from '../data/cv';

export default function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="container">
        <div className="section__header">
          <p className="eyebrow">Trayectoria</p>
          <h2>Experiencia profesional</h2>
        </div>
        <div className="timeline">
          {experience.map((job) => (
            <article key={job.title} className="timeline__item">
              <div className="timeline__meta">
                <span className="timeline__type">{job.type}</span>
                <time>{job.period}</time>
              </div>
              <h3>{job.title}</h3>
              <ul>
                {job.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a href={job.link} target="_blank" rel="noreferrer" className="link-arrow">
                Ver repositorio en GitHub
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
