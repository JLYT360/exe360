# Implémentation — Page Aides & Financement

## Contexte

Refactorisation de la page "Subvention MQE" (`/strategy`) en deux pages distinctes :
- `/aides-financement` — page épurée avec liste d'organismes et présentation du service
- `/evaluation-aides` — formulaire long d'évaluation (anciennement en bas de Strategy.tsx)

Tous les fichiers à utiliser se trouvent dans le dossier `Claude/`.

---

## Fichiers à créer

### 1. `apps/web/src/pages/AidesFinancement.tsx`
→ Copier le contenu de `Claude/AidesFinancement.tsx`

### 2. `apps/web/src/pages/EvaluationAides.tsx`
→ Copier le contenu de `Claude/EvaluationAides.tsx`

---

## Fichiers à remplacer

### 3. `apps/web/src/components/NavBar.tsx`
→ Remplacer par le contenu de `Claude/NavBar.tsx`

Changement principal : le lien `Subvention MQE` devient `Aides & Financement` pointant vers `/aides-financement`.

### 4. `apps/web/src/main.dev.tsx`
→ Remplacer par le contenu de `Claude/main.dev.tsx`

Changements :
- Import de `AidesFinancement` et `EvaluationAides`
- Suppression de l'import `Strategy`
- Ajout des routes `/aides-financement` et `/evaluation-aides`
- La route `/strategy` redirige vers `<AidesFinancement />` pour ne pas casser les liens existants

### 5. `apps/web/src/main.tsx`
→ Remplacer par le contenu de `Claude/main.tsx`

Mêmes changements que `main.dev.tsx` mais avec le préfixe `/jlytexe-site/` sur toutes les routes.

---

## Fichier à supprimer

### 6. `apps/web/src/pages/Strategy.tsx`
→ Supprimer ce fichier — son contenu est maintenant réparti entre `AidesFinancement.tsx` et `EvaluationAides.tsx`.

---

## Vérifications après implémentation

- [ ] `pnpm dev` démarre sans erreur TypeScript
- [ ] La navbar affiche bien "Aides & Financement" à la place de "Subvention MQE"
- [ ] `/aides-financement` affiche la page épurée avec la liste des organismes
- [ ] `/evaluation-aides` affiche le formulaire en 7 sections
- [ ] Le bouton "Évaluer mon éligibilité" sur `/aides-financement` redirige bien vers `/evaluation-aides`
- [ ] L'ancienne URL `/strategy` redirige bien vers `/aides-financement` sans erreur 404
- [ ] Aucune référence à `Strategy` ne reste dans les imports

---

## Commit suggéré

```
git add .
git commit -m "Refacto page aides : Strategy → AidesFinancement + EvaluationAides

- Nouvelle page /aides-financement : épurée, liste organismes, CTA
- Nouvelle page /evaluation-aides : formulaire long dédié (7 sections)
- NavBar : renommage Subvention MQE → Aides & Financement
- Redirection /strategy → /aides-financement (compatibilité liens)
- Suppression Strategy.tsx"
git push origin develop
```
