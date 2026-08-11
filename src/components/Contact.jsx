import { profile } from '../data/cv';

export default function Contact() {
  return (
    <section id="contacto" className="section contact">
      <div className="container contact__inner">
        <div>
          <p className="eyebrow">¿Trabajamos juntos?</p>
          <h2>Contacto</h2>
          <p className="contact__text">
            Disponible para proyectos full-stack, APIs REST y soluciones empresariales con Java, C# y
            React.
          </p>
        </div>

        <div className="contact__links">
          <a
            href={profile.cvPdf}
            download="Hector_Jose_Perez_CV.pdf"
            className="contact__item contact__item--cv"
          >
            <span>Currículum</span>
            <strong>Descargar PDF</strong>
          </a>
          <a href={`mailto:${profile.email}`} className="contact__item">
            <span>Email</span>
            <strong>{profile.email}</strong>
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="contact__item">
            <span>Teléfono</span>
            <strong>{profile.phone}</strong>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact__item">
            <span>LinkedIn</span>
            <strong>hector-jose-perez</strong>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="contact__item">
            <span>GitHub</span>
            <strong>@Perez8899</strong>
          </a>
        </div>
      </div>
    </section>
  );
}
