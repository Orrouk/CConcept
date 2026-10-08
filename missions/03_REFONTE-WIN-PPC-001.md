# MISSION 03 — WIN : PROPOSITION DE VALEUR, TARIF ET FAQ

Statut : VERSION PUBLIQUE ET QA FONCTIONNELLE NON DESTRUCTIVE VÉRIFIÉES (8 octobre 2026).

## Dépôt et domaine
Orrouk/CConcept, branche main, fichier CNAME = win.conceptcreatif.com.
Le 8 octobre 2026, index.html et README.md ont été mis à jour.

## Exigences
- Afficher 798 $ CAD sans fausse promotion ni ancien 399 $.
- Présenter la proposition de valeur comme un exercice de planification stratégique fondamentale; le site HTML de conversion est le livrable.
- Expliquer autonomie de la page, nom de domaine client, absence de frais mensuels d'hébergement facturés par Concept Créatif dans la configuration initiale, sans promettre la gratuité éternelle d'un tiers.
- FAQ « Proposez-vous la gestion de publicité au clic (PPC), notamment dans ChatGPT Ads ? » Réponse oui, dans un mandat distinct; lien https://conceptcreatif.com/.
- FAQ mémoire d'entreprise/audit IA : orienter vers https://conceptcreatif.com/ sans inclure le service dans le forfait.
- Conserver formulaire, accès calendrier, Umami, navigation, mobile, accessibilité, liens; ne toucher ni DNS, MX/SPF/DKIM ni environnement de déploiement à l'aveugle.
- Vérifier et corriger toute référence active à Win2, à 399 $, à une réduction de 50 %, ou à « gratuit à vie » non conditionnée.

## Blocage constaté
Le contrôle initial voyait 399 $ pendant la propagation. Un contrôle direct ultérieur a confirmé 798 $, la FAQ ChatGPT Ads et l'absence de 399 $. GitHub Pages rapporte un déploiement réussi. Aucun DNS modifié.

## QA fonctionnelle — 8 octobre 2026
- Version live de Win accessible; `script.js` et `styles.css` servis publiquement.
- Tous les liens internes `#contenu`, `#offre`, `#processus`, `#questions` et `#demande` correspondent à des cibles présentes.
- Le calendrier public « La demi-heure essentielle » s'ouvre et présente des créneaux; aucune réservation n'a été créée.
- Le formulaire live contient les champs requis nom, courriel et entreprise/projet. Il pointe vers FormSubmit en AJAX. Aucun faux contact n'a été envoyé, conformément au livrable.
- `script.js` gère les événements `cta-landing-page`, `diagnostic-booking`, `lead-form-start` et `lead-form-submit`; le script Umami public est accessible.
- Le responsive est vérifié structurellement : balise viewport active, rupture à 980 px, rupture mobile à 640 px, empilement des grilles principales et des champs sur mobile. Aucun contrôle visuel automatisé par émulation n'a été produit.
- Les liens PPC/ChatGPT Ads et audit IA/mémoire renvoient au site mère et demeurent des mandats distincts. La proposition de valeur reste le socle réutilisable; la mémoire agentique demeure une suite séparée.

## Livrable
URL live avec nouveau texte vérifié, README synchronisé et retour de test formulaire sans envoi réel d'un contact fictif.
