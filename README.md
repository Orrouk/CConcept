# Concept Créatif — Proposition de valeur et page Web stratégique (798 $ CAD)

Démonstrateur canonique : https://win.conceptcreatif.com/ . L'offre comprend la clarification et la rédaction de la proposition de valeur, sa traduction en page Web autonome et une ronde de corrections. Prix de référence : 798 $ CAD. Les campagnes PPC (dont ChatGPT Ads), le référencement IA et l'audit agentique sont des mandats distincts orientés vers https://conceptcreatif.com/ .

La valeur principale est la rédaction stratégique; HTML, design et hébergement sont les moyens de livraison. Ne pas modifier les DNS ou l'hébergement sans validation de la chaîne de publication.

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

Le formulaire public utilise FormSubmit en mode AJAX. `script.js` intercepte la soumission, limite les pièces jointes à 1 Mo au total, affiche l'état d'envoi et conserve un message de repli avec le numéro de téléphone en cas d'échec. La QA du 8 octobre 2026 a vérifié la structure, les champs requis et la cible publique sans envoyer de faux contact.

## Logo

Cette première version référence encore le logo public actuel de `win.conceptcreatif.com`. Avant la bascule définitive du domaine, il faudra copier ce fichier dans le dépôt pour rendre le site entièrement autonome.
