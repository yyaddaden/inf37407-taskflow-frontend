# INF37407 – TaskFlow (front-end)

Démonstrations front-end du cours **INF37407 – Technologie de l'inforoute** (UQAR).

Le fil rouge est **TaskFlow**, une application de gestion de tâches. Elle est construite séance après séance, de React jusqu'au déploiement en production. Le back-end Django (API REST et GraphQL) se trouve dans un dépôt séparé.

## Séances

| Dossier | Séance | Notions |
|---|---|---|
| [`s08-taskflow-react`](./s08-taskflow-react) | React et TypeScript | Composants, JSX, props, state, événements, formulaires, listes, `useEffect` |
| `s09-taskflow-next-routing` | Next.js : fondamentaux et routage | App Router, routes dynamiques, layouts, Tailwind CSS, shadcn/ui |
| `s10-taskflow-next-data` | Next.js : rendu et données | Server/Client Components, CSR/SSR/SSG, `fetch`, loading, erreurs, cache |
| `s11-taskflow-fullstack` | Next.js et Django | API REST, GraphQL, JWT, routes protégées, CORS |
| `s12-taskflow-supabase` | Supabase | BaaS, tables, authentification, sessions |
| `s13-taskflow-production` | Qualité et déploiement | Tests, Git, CI/CD, déploiement |

Les dossiers sans lien seront ajoutés au fil de la session.

Chaque dossier est un projet autonome. Il reprend le résultat de la séance précédente et y ajoute les notions de la séance.

## Prérequis

- [Node.js](https://nodejs.org/) ≥ 20.19 ou ≥ 22.12
- [Visual Studio Code](https://code.visualstudio.com/), avec les extensions ESLint et Error Lens (recommandées)
- Extension de navigateur React Developer Tools

## Lancer une démonstration

```bash
git clone https://github.com/<votre-compte>/inf37407-taskflow-frontend.git
cd inf37407-taskflow-frontend/s08-taskflow-react
npm install
npm run dev
```

L'application est ensuite accessible à l'adresse affichée dans le terminal (par défaut http://localhost:5173).

Autres commandes utiles :

| Commande | Rôle |
|---|---|
| `npm run typecheck` | Vérifie les types TypeScript (Vite ne le fait pas) |
| `npm run lint` | Analyse le code avec ESLint |
| `npm run build` | Construit la version de production |

## Auteur

Prof. Yacine Yaddaden, Ph. D. – Département de mathématiques, d'informatique et de génie, UQAR.

Code fourni à des fins pédagogiques.
