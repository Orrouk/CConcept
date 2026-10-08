# MISSION 04 — CONTRÔLE CROISÉ, PROVENANCE ET PUBLICATION

Statut : QA ÉDITORIALE ET QA FONCTIONNELLE NON DESTRUCTIVE VÉRIFIÉES (8 octobre 2026).

## Contrôle
1. Vérifier https://conceptcreatif.com/ et https://win.conceptcreatif.com/ en accès direct après publication, pas seulement le dépôt.
2. Vérifier l'article publié https://conceptcreatif.com/proposition-de-valeur-avant-site-web/.
3. Contrôler les prix et exclusions identiques partout; 798 $ CAD; pas de rabais 50 %.
4. Tester navigation, responsive, formulaire, calendrier, scripts analytics, liens PPC/ChatGPT Ads vers conceptcreatif.com, liens audit IA.
5. Préserver les distinctions : PV/landing page, GEO/SEO, PPC/ChatGPT Ads, audit IA, mémoire agentique. Ne pas fusionner les services.
6. Vérifier la cohérence des URL : Win canonique, Win2 hérité; signaler au lieu de modifier DNS et services de messagerie.
7. Synchroniser les décisions dans la voûte Concept Créatif, la carte de l'offre et les MOC concernées.

## Résultats fonctionnels — 8 octobre 2026
- Réussi : accueil Concept Créatif, article « Avant de bâtir votre site Web, écrivez votre proposition de valeur » et Win accessibles après publication.
- Réussi : l'accueil du site mère renvoie vers Win et vers l'article; l'article renvoie vers Win; Win renvoie vers Concept Créatif et vers le calendrier.
- Réussi : le calendrier public s'ouvre sur « La demi-heure essentielle » et affiche des créneaux. Aucune réservation de test n'a été créée.
- Réussi : tous les ancres internes de Win ont une cible existante.
- Réussi : formulaire visible, champs requis présents, cible FormSubmit AJAX active dans le HTML et gestion d'état/erreur présente dans `script.js`. Aucun POST fictif n'a été effectué.
- Réussi : chargeur Umami présent, script public accessible, événements CTA/calendrier/formulaire câblés.
- Réussi structurellement : viewport mobile actif; règles responsive à 980 px et 640 px; grilles principales et champs passent en une colonne aux seuils prévus.
- Réussi : les parcours PPC/ChatGPT Ads et audit IA/mémoire demeurent distincts et renvoient au site mère.
- Doctrine respectée dans le contrôle : la PV est le socle de communication réutilisable et la page Web sa première matérialisation; l'audit et la mémoire agentique ne sont pas inclus dans le forfait Web initial.
- Correction appliquée : README mis à jour pour documenter le formulaire FormSubmit réel au lieu de l'ancien `/api/contact`.
- Non exécuté par principe : envoi réel d'un faux contact.
- Limite de preuve : aucun screenshot d'émulation responsive automatisée n'a été produit; la validation responsive repose sur le rendu public accessible, la balise viewport et les règles CSS effectivement publiées.
- Intervention humaine requise : aucune pour les parcours vérifiés. Un test réel de réception du formulaire ne doit être fait qu'avec une demande authentique ou une adresse explicitement prévue à cet effet.

## Livrable
Compte-rendu factuel consigné ci-dessus. Aucun DNS, MX/SPF/DKIM ni service de messagerie modifié.

## Complément de statut — revue ciblée du 8 octobre 2026

- **CONFIRMÉ SUR SITE PUBLIC** : accueil `conceptcreatif.com` et article de proposition de valeur accessibles; liens vers Win présents. La doctrine publique présente la PV comme un socle stratégique réutilisable; l'audit/mémoire agentique est une prestation ultérieure distincte.
- **DÉJÀ VÉRIFIÉ, NON RELANCÉ** : ancres, champs requis, câblage FormSubmit, calendrier, événements Umami et responsive CSS structurel, selon les résultats fonctionnels antérieurs ci-dessus.
- **OUVERT — preuve non obtenue** : émulation visuelle mobile de `win.conceptcreatif.com`. La lecture publique automatisée a retourné `invalid_url`; le navigateur visuel n'a pas démarré faute de crédit. Ne pas interpréter ces limites d'outil comme une panne du site.
- **EXCLU** : soumission d'un faux formulaire ou création d'une réservation de test. Le test de réception authentique reste soumis aux conditions de la mission.
- **AUCUN CHANGEMENT** : DNS, Cloudflare, messagerie, campagnes et publication.
