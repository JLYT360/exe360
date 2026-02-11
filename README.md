Tu peux **copier-coller** tel quel, puis adapter les sections « À personnaliser ».
***

# JLYTEXE — Site vitrine & services (full code)

Projet **full‑stack léger** (sans CMS) pour présenter l’offre JLYTEXE :

*   **Marketing stratégique**, **Assistance administrative**, **Pré‑comptabilité** (hors expertise),
*   **Support informatique**, **Formation numérique & bureautique**.  
    Objectifs : performance, SEO, simplicité d’exploitation, contenus clairs orientés conversion.

***

## 1) Démarrage rapide

```bash
# 1) Cloner
git clone <REPO_URL> jlytexe-site
cd jlytexe-site

# 2) Préparer l'environnement
corepack enable
# ou installe pnpm : npm i -g pnpm

# 3) Installer
pnpm install
# (ou npm install / yarn)

# 4) Lancer le front en dev
pnpm dev
# Ouvre http://localhost:5173

# 5) (Option) Lancer l'API Express
pnpm dev:api
# Ouvre http://localhost:8787
```

***

## 2) Périmètre & contenus (À personnaliser)

*   **Cibles** : TPE, indépendants, associations, professions libérales en Martinique.
*   **Positionnement** : accompagnement **360°** (stratégie + exécution raisonnée).
*   **Propositions phares** :
    *   *Marketing stratégique & développement* (plans marketing/comm, lancement, croissance).
    *   *Assistance administrative* (organisation, relances, modèles).
    *   *Pré‑comptabilité* (saisie/préparation, tableaux de bord — **sans établir les comptes annuels**).
    *   *Support informatique & solutions numériques* (installation, cloud, sécurité basique).
    *   *Formation numérique & bureautique* (Word, Excel, Drive, organisation).

**CTA principaux** : *Demander un diagnostic express (1h)*, *Réserver un appel*, *Télécharger le PDF “Business Plan & Packs”*.

***

## 3) Arborescence

```text
jlytexe-site/
├─ apps/
│  ├─ web/                 # Front Vite + React + TS
│  │  ├─ src/
│  │  │  ├─ assets/        # images, icônes, styles
│  │  │  ├─ components/    # UI réutilisable
│  │  │  ├─ features/
│  │  │  │  ├─ marketing/
│  │  │  │  ├─ admin/      # assistance administrative
│  │  │  │  ├─ precompta/
│  │  │  │  ├─ support/
│  │  │  │  └─ formation/
│  │  │  ├─ pages/         # routage (React Router)
│  │  │  ├─ lib/           # helpers (SEO, fetch, etc.)
│  │  │  └─ main.tsx
│  │  └─ index.html
│  └─ api/                 # Optionnel : API Node + Express
│     ├─ src/
│     │  ├─ routes/
│     │  ├─ middlewares/
│     │  └─ server.ts
│     └─ tsconfig.json
├─ packages/
│  ├─ ui/                  # Design system léger (optionnel)
│  └─ config/              # ESLint/Prettier/tsconfig partagés
├─ .github/workflows/      # CI (lint, tests, build)
├─ docker/                 # Dockerfiles & compose
├─ .env.example
├─ package.json            # scripts monorepo (pnpm)
└─ README.md
```

***

## 4) Stack & outils

*   **Front** : React 18, Vite, TypeScript, React Router, CSS Modules/Tailwind (à choisir).
*   **API** *(optionnel)* : Node 20, Express, Zod (validation), CORS, Helmet.
*   **Qualité** : ESLint, Prettier, Type‑safe env, Husky + lint‑staged (pré‑commit).
*   **Tests** : Vitest + Testing Library (unitaires), Playwright (E2E).
*   **CI** : GitHub Actions (lint, test, build).
*   **SEO/Perf** : Meta tags, OpenGraph, sitemap.xml, robots.txt, analyse Lighthouse.
*   **Déploiement** : Vercel/Netlify (front), Railways/Fly.io/VPS Docker (API).
*   **Observabilité** : Log minimal + Sentry (optionnel).

***

## 5) Scripts (monorepo PNPM)

```json
{
  "scripts": {
    "dev": "pnpm -C apps/web dev",
    "dev:api": "pnpm -C apps/api dev",
    "build": "pnpm -C apps/web build && pnpm -C apps/api build",
    "preview": "pnpm -C apps/web preview",
    "lint": "eslint . --ext .ts,.tsx",
    "format": "prettier --write .",
    "test": "vitest run",
    "test:ui": "playwright test"
  }
}
```

***

## 6) Config environnement

Créer `.env` à partir de `.env.example` :

```bash
# Front
VITE_SITE_URL=https://exemple.jlytexe.com
VITE_API_BASE_URL=http://localhost:8787

# API
PORT=8787
CORS_ORIGINS=http://localhost:5173,https://exemple.jlytexe.com
SENTRY_DSN=
```

Utiliser une **validation TypeScript** (ex : Zod) pour éviter les env manquants en prod.

***

## 7) Routing & pages (front)

Pages minimales :

```text
/                  # Accueil (proposition de valeur)
/services          # Vue d’ensemble
/services/marketing-strategique
/services/assistance-administrative
/services/precomptabilite
/services/support-informatique
/services/formation
/tarifs            # Grilles + packs
/contact           # Formulaire (EmailJS/API)
```

> **SEO** : chaque page service = H1 clair, meta title 55–60c, meta description 150–160c, schéma JSON‑LD (Service/LocalBusiness).

***

## 8) Contenus & messages (exemples)

**Hero Accueil**

    JLYTEXE — Structurer, piloter, développer.
    Assistance administrative | Pré‑comptabilité | Marketing stratégique | Support & Formation
    Une stratégie claire, des actions utiles, des résultats mesurables.
    [Demander un diagnostic express] [Voir les offres]

**Marketing stratégique (extrait)**

    Plans marketing & communication, stratégie de lancement, trajectoires de croissance.
    Diagnostic → Positionnement → Feuille de route 90 jours → Pilotage mensuel.

**Pré‑comptabilité (extrait)**

    Saisie & préparation des pièces, suivi factures/dépenses, tableaux de bord.
    Préparation pour votre expert‑comptable (sans établir vos comptes annuels).

***

## 9) Tarifs & packs (résumé intégrable)

*(Adapter au $/€ selon ton affichage)*

```md
### Forfaits d’heures
- Assistance administrative : 5h 120 €, 10h 220 €, Mensuel (20h) 420 €, Annuel 4 500 €.
- Pré‑comptabilité : 5h 140 €, 10h 260 €, Mensuel (20h) 500 €, Annuel 5 400 €.
- Marketing stratégique : 5h 200 €, 10h 380 €, Mensuel (10h) 350 €, Annuel 3 800 €.
- Support & formation : 5h 150 €, 10h 280 €, Mensuel (10h) 260 €, Annuel 2 880 €.

### Projets ponctuels
- Plan marketing complet : 450–650 €.
- Plan de communication : 350–550 €.
- Stratégie de lancement : 400–700 €.

### Taux horaires
- Admin 30 €/h · Pré‑compta 35 €/h · Support/Formation 35 €/h · Stratégie 45 €/h.
```

***

## 10) Qualité code

**ESLint / Prettier / TSConfig partagés**

```bash
pnpm dlx @eslint/config
pnpm add -D eslint prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

**Hooks Git**

```bash
pnpm add -D husky lint-staged
pnpm dlx husky init
# .husky/pre-commit
npx --no-install lint-staged
```

**lint-staged**

```json
{
  "*.ts?(x)": ["eslint --fix", "prettier --write"]
}
```

***

## 11) Tests

**Unit/Component (Vitest + Testing Library)**

```bash
pnpm add -D vitest @testing-library/react jsdom
pnpm test
```

**E2E (Playwright)**

```bash
pnpm dlx playwright install
pnpm test:ui
```

***

## 12) Sécurité & RGPD (minima)

*   HTTPS partout, headers (Helmet sur API).
*   Pas de données sensibles côté front (clés privées).
*   Formulaire de contact : consentement explicite, finalité, durée.
*   Cookies uniquement techniques (si pas d’analytics).
*   Mettre à jour **mentions légales** : statut micro‑entreprise, périmètre **pré‑compta ≠ expertise**.

***

## 13) Déploiement

### Option A — Vercel/Netlify (Front)

```bash
pnpm build
# Upload du dossier dist/ (Vite)
```

Ajouter `sitemap.xml`, `robots.txt`, redirections si besoin.

### Option B — Docker (Front + API)

`docker/docker-compose.yml` :

```yaml
services:
  web:
    build: ./apps/web
    ports: ["8080:80"]
  api:
    build: ./apps/api
    ports: ["8787:8787"]
    environment:
      - PORT=8787
      - CORS_ORIGINS=https://exemple.jlytexe.com
```

***

## 14) Plan d’action (non détaillé)

1.  **Structure & contenus**
    *   Créer pages Services + Tarifs (avec packs), CTA « Diagnostic express ».
    *   Ajouter section *Formation numérique & bureautique*.
    *   Intégrer le PDF *Business Plan & Packs* en téléchargement.

2.  **Acquisition**
    *   Partenariats locaux (experts‑comptables/avocats/agences), coworking & CCIM.
    *   Groupes Facebook/LinkedIn Martinique (posts réguliers, cas clients).
    *   Offre d’essai 1 mois « Assistance administrative » (prix découverte).

3.  **Objectifs mensuels**
    *   6–7 clients **admin** (forfait 10h), 3–4 **marketing stratégique**, 3 **support/formation**, 1 **projet ponctuel**.
    *   CA cible : **5 000 $/mois** (\~60 000 $/an), \~100–110h vendues/mois.

4.  **Roadmap 3 ans**
    *   **Année 1** : 13–15 clients actifs, 3 packs standardisés, 3 partenariats.
    *   **Année 2** : 80–95k$/an, montée de gamme, mini‑formations (bureautique), +20 % tarifs stratégique.
    *   **Année 3** : 110–130k$/an, possible SASU/régime réel, assistants/sous‑traitance, catalogue de formations, 2 niches sectorielles (libéraux, tourisme).

***

## 15) Commandes utiles (récap)

```bash
# Dev
pnpm dev          # front
pnpm dev:api      # api

# Qualité
pnpm lint
pnpm format
pnpm test
pnpm test:ui

# Build
pnpm build
pnpm preview

# Docker
docker compose up --build
```

***

## 16) Licence & mentions

*   © JLYTEXE — Tous droits réservés.
*   Les marques et logos cités appartiennent à leurs détenteurs respectifs.
*   La « pré‑comptabilité » reste une assistance (saisie/préparation) ; **l’établissement des comptes annuels relève d’un expert‑comptable**.

***

### Besoin que je te génère le **squelette du projet** (Vite + React + TS + Express + ESLint/Prettier + tests + Docker) directement en fichiers ?

Je peux le créer et te fournir un **zip** prêt à lancer.
