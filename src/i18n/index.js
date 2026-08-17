import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './locales';

// Detectar idioma guardado o usar español por defecto
const savedLanguage = localStorage.getItem('language') || 'es';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

// Guardar el idioma cuando cambie
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;