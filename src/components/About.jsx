import { profile } from '../data/cv';

export default function About() {
  return (
    <section id="sobre-mi" className="section">
      <div className="container">
        <div className="section__header">
          <p className="eyebrow">Resumen profesional</p>
          <h2>Sobre mí</h2>
        </div>
        <div className="about__card">
          <p>{profile.summary}</p>
          <div className="about__tags">
            <span>Java</span>
            <span>C#</span>
            <span>Spring Boot</span>
            <span>React</span>
            <span>Microservicios</span>
            <span>Scrum</span>
          </div>
        </div>
      </div>
    </section>
  );
}
