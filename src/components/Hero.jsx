import { profile } from '../data/cv';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">Portafolio profesional</p>
          <h1>{profile.name}</h1>
          <p className="hero__title">{profile.title}</p>
          <p className="hero__location">{profile.location}</p>

          <div className="hero__actions">
            <a href="#experiencia" className="btn btn--primary">
              Ver proyectos
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
              <span>Proyectos full-stack</span>
            </li>
            <li>
              <strong>Java</strong>
              <span>Spring Boot & APIs REST</span>
            </li>
            <li>
              <strong>Docker</strong>
              <span>Despliegue contenerizado</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
