# Portfolio NBIGA Salma

Single-page portfolio built with React (CRA), showcasing projects, skills, and a contact form powered by EmailJS. 
All assets are stored locally in `src/assets` for predictable deployments.

## Features
- Navigation with hash-aware smooth scrolling (`ScrollToHash`).
- Hero/Accueil section with local profile image.
- Projects grid with local screenshots (`siteecom.png`, `sitegestion.png`, `sitereservation.png`, `portfoliomodern.png`) and per-project links.
- Live/Code buttons: `Code` opens the repo; `Live` opens the live link or shows an inline “The project has not been deployed yet.” message when missing.
- Contact form (EmailJS) with inline success/error status messages—no browser alerts. Includes timestamp sent to the template (`nom`, `email`, `message`, `time`, `to_email`).
- Error boundary around the app and footer for safer rendering.

## Tech Stack
- React (Create React App)
- React Router
- EmailJS (`@emailjs/browser`)
- Component-scoped CSS (e.g., `Contact.css`, `Projets.css`)

## Project Data (src/components/Projets.js)
- Site E-commerce — live: https://site-ecom-sand.vercel.app/ — repo: https://github.com/SALMA-NB20/parfume-website
- Site Gestion — repo: https://github.com/SALMA-NB20/Gestion_Centre (live pending)
- Site Gestion Hotel — repo: https://github.com/SALMA-NB20/hotel-reservation (live pending)
- Portfolio Moderne — live: https://salmanbiga.vercel.app/ — repo: https://github.com/SALMA-NB20/dev_Portfolio

## Setup
```bash
npm install
npm start
```
App runs at http://localhost:3000.

## EmailJS Configuration
Update `src/components/Contact.js` with your keys:
```js
const SERVICE_ID = '...';
const TEMPLATE_ID = '...';
const PUBLIC_KEY = '...';
```
Ensure the EmailJS template uses: `{{nom}}`, `{{email}}`, `{{message}}`, `{{time}}`, `{{to_email}}`. The provided HTML template in EmailJS should include these placeholders.

## Assets
All images live in `src/assets/` and are imported directly in components (no `public/` references).

## Available Scripts
- `npm start` — dev server with hot reload.
- `npm test` — CRA test runner.
- `npm run build` — production build.

## Deployment
Any static host works (e.g., netlify/Vercel/etc..). Ensure environment variables (EmailJS keys) are set if your host requires them.
