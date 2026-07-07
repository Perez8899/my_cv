import { certifications, education } from '../data/cv';

export default function Education() {
  return (
    <section id="educacion" className="section section--alt">
      <div className="container">
        <div className="section__header">
          <p className="eyebrow">Formación</p>
          <h2>Educación y certificaciones</h2>
        </div>

        <div className="edu__grid">
          <div>
            <h3 className="edu__subtitle">Educación</h3>
            <div className="edu__list">
              {education.map((item) => (
                <article key={item.degree} className="edu-card">
                  <time>{item.period}</time>
                  <h4>{item.degree}</h4>
                  <p>{item.institution}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="edu__subtitle">Certificaciones</h3>
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
