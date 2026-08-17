import { useTranslation } from 'react-i18next';
import { profile } from '../data/cv';

export default function Contact() {
  const { t, i18n } = useTranslation();
  const cvUrl = i18n.language === 'en' ? profile.cvPdfEn : profile.cvPdf;
  const cvFilename = i18n.language === 'en' ? 'Hector_Jose_Perez_CV_EN.pdf' : 'Hector_Jose_Perez_CV.pdf';

  return (
    <section id="contacto" className="section contact">
      <div className="container contact__inner">
        <div>
          <p className="eyebrow">{t('contact.eyebrow')}</p>
          <h2>{t('contact.title')}</h2>
          <p className="contact__text">{t('contact.text')}</p>
        </div>

        <div className="contact__links">
          <a
            href={cvUrl}
            download={cvFilename}
            className="contact__item contact__item--cv"
          >
            <span>{t('contact.cvLabel')}</span>
            <strong>{t('contact.cvDownload')}</strong>
          </a>
          <a href={`mailto:${profile.email}`} className="contact__item">
            <span>{t('contact.email')}</span>
            <strong>{profile.email}</strong>
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="contact__item">
            <span>{t('contact.phone')}</span>
            <strong>{profile.phone}</strong>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact__item">
            <span>{t('contact.linkedin')}</span>
            <strong>hector-jose-perez</strong>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="contact__item">
            <span>{t('contact.github')}</span>
            <strong>@Perez8899</strong>
          </a>
        </div>
      </div>
    </section>
  );
}
