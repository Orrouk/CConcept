# Concept Créatif — Landing page 399 $

Version statique de la landing page publique de Concept Créatif, préparée pour GitHub + Cloudflare Pages.

## Fichiers

- `index.html` — contenu et structure
- `styles.css` — design responsive
- `script.js` — interactions et formulaire

## Déploiement Cloudflare Pages

- Branche de production : `main`
- Aucun framework
- Aucune commande de build requise
- Répertoire de sortie : racine du dépôt

## Formulaire

Le formulaire pointe déjà vers `/api/contact`. Tant que la Function Cloudflare n’existe pas, l’aperçu affiche un message plutôt que d’envoyer la demande dans le vide.

## Logo

Cette première version référence encore le logo public actuel de `win.conceptcreatif.com`. Avant la bascule définitive du domaine, il faudra copier ce fichier dans le dépôt pour rendre le site entièrement autonome.
