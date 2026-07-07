import { useState } from 'react';
import { navLinks, profile } from '../data/cv';

export default function Header() {
  const [open, setOpen] = useState(false);

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

        <button
          type="button"
          className="nav-toggle"
          aria-label="Abrir menú"
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
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
