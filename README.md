# LandP-BuilderMania


src/
├── assets/               # Fichiers statiques (images, polices, etc.)
│   ├── images/           # Logos, illustrations, etc.
│   └── fonts/            # Fichiers de polices personnalisées
│
├── components/           # Composants réutilisables
│   ├── ui/               # Composants UI génériques (boutons, cartes, etc.)
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── ...
│   │
│   ├── sections/         # Sections de la landing page
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   └── ...
│   │
│   └── layout/           # Layouts globaux
│       ├── Header.jsx
│       ├── Footer.jsx
│       └── Layout.jsx    # Wrapper global (en-tête/pied de page)
│
├── context/              # Contextes React (state global)
│   └── AppContext.jsx    # Ex: thème, authentification
│
├── hooks/                # Hooks personnalisés
│   └── useFetchData.jsx  # Ex: hook pour API calls
│
├── pages/                # Pages/routes (si utilisation de React Router)
│   ├── Home.jsx          # Landing page
│   ├── Pricing.jsx       # Page tarifs
│   └── ...
│
├── styles/               # Fichiers CSS/Tailwind personnalisés
│   ├── globals.css       # Styles globaux (importé dans main.jsx)
│   └── animations.css    # Keyframes/animations
│
├── utils/                # Fonctions utilitaires
│   ├── helpers.js        # Ex: formateurs de dates, calculs
│   └── constants.js      # Données statiques (ex: liste de features)
│
├── App.jsx               # Composant racine
├── main.jsx              # Point d'entrée (avec import de Tailwind)
└── vite-env.d.ts         # Types pour Vite (si TypeScript)