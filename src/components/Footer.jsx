import { profile } from '../data/cv';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {profile.name}.
        </p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
