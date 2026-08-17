import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { navLinks, profile } from '../data/cv';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const cvUrl = i18n.language === 'en' ? profile.cvPdfEn : profile.cvPdf;
  const cvFilename = i18n.language === 'en' ? 'Hector_Jose_Perez_CV_EN.pdf' : 'Hector_Jose_Perez_CV.pdf';

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className="header">
      <div className="container header__inner">
        <button type="button" className="logo" onClick={() => scrollTo('inicio')}>
          <span className="logo__mark">HP</span>
          <span className="logo__text">{profile.name.split(' ')[0]}</span>
        </button>

        <div className="header__actions">
          <a
            href={cvUrl}
            download={cvFilename}
            className="header__cv"
          >
            {t('profile.downloadCv')}
          </a>

          <LanguageSwitcher />

          <button
            type="button"
            className="nav-toggle"
            aria-label={t('header.openMenu')}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav ${open ? 'nav--open' : ''}`}>
            {navLinks.map((link) => (
              <button key={link.id} type="button" onClick={() => scrollTo(link.id)}>
                {t(`nav.${link.id}`)}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}