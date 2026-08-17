import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [isAnimating, setIsAnimating] = useState(false);
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    setIsAnimating(true);
    const newLang = currentLang === 'es' ? 'en' : 'es';
    
    setTimeout(() => {
      i18n.changeLanguage(newLang);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={`language-switcher ${isAnimating ? 'rotating' : ''}`}
      aria-label={t('header.switchLanguage')}
    >
      <span className="language-flag">
        {currentLang === 'es' ? '🇪🇸' : '🇺🇸'}
      </span>
      <span className="language-code">
        {currentLang === 'es' ? 'ES' : 'EN'}
      </span>
    </button>
  );
}