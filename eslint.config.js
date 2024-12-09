// Import der ESLint-Basisregeln und Plugins
import js from "@eslint/js"; // Basis-JavaScript-Regeln von ESLint
import globals from "globals"; // Globale Variablen für verschiedene Umgebungen (z. B. browser, node)
import react from "eslint-plugin-react"; // Plugin für React-spezifische Linting-Regeln
import reactHooks from "eslint-plugin-react-hooks"; // Plugin für React Hooks-Validierung
import reactRefresh from "eslint-plugin-react-refresh"; // Plugin zur Unterstützung von React Refresh

export default [
  // Ignoriere Dateien oder Ordner, die nicht gelintet werden sollen
  { ignores: ["dist"] }, // Der Ordner 'dist' wird ausgeschlossen (z. B. kompilierte Dateien)

  {
    // Konfiguriere alle Dateien mit den Endungen .js oder .jsx
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      // Definiere die unterstützte ECMAScript-Version und Optionen
      ecmaVersion: 2020, // ECMAScript 2020-Syntax
      globals: globals.browser, // Globale Browser-Variablen wie `window` oder `document`
      parserOptions: {
        ecmaVersion: "latest", // Nutze immer die neueste ECMAScript-Version
        ecmaFeatures: { jsx: true }, // Ermögliche die Nutzung von JSX
        sourceType: "module", // Unterstütze ES6-Module (import/export)
      },
    },
    settings: {
      // Konfiguriere React-spezifische Einstellungen
      react: {
        version: "18.3", // Spezifiziere die React-Version, um kompatible Regeln anzuwenden
      },
    },
    plugins: {
      // Lade React- und andere Plugins für spezifische Linting-Regeln
      react, // React-spezifische Regeln
      "react-hooks": reactHooks, // Regeln für die Validierung von React Hooks
      "react-refresh": reactRefresh, // Unterstützung für React Refresh
    },
    rules: {
      // Basisregeln aus den empfohlenen JavaScript-Konfigurationen
      ...js.configs.recommended.rules,
      // Empfohlene React-Regeln und Regeln für JSX
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules, // Spezifische Regeln für JSX Runtime
      // Empfohlene Regeln für React Hooks
      ...reactHooks.configs.recommended.rules,

      // Deaktiviert Warnungen, wenn target="_blank" ohne rel="noopener noreferrer" verwendet wird
      "react/jsx-no-target-blank": "off",

      // Warnt nur, wenn Komponenten nicht korrekt für React Refresh exportiert werden
      "react-refresh/only-export-components": [
        "warn", // Zeige eine Warnung an (keinen Fehler)
        { allowConstantExport: true }, // Erlaubt den Export von konstanten Komponenten
      ],

      // Deaktiviert die Pflicht zur Verwendung von PropTypes
      "react/prop-types": "off",
    },
  },
];
