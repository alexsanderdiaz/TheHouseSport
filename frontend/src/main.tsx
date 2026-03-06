import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { I18nextProvider } from "react-i18next"
import i18n from "i18next";
import home_en from "./translations/en/home.json";
import home_es from "./translations/es/home.json";
import navbar_en from "./translations/en/navbar.json";
import navbar_es from "./translations/es/navbar.json";
import App from './App.tsx'

i18n.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    en: {
      home: home_en,
      navbar: navbar_en,
    },
    es: {
      home: home_es,
      navbar: navbar_es,
    },
  },

  defaultNS: 'home',
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </StrictMode>,
)
