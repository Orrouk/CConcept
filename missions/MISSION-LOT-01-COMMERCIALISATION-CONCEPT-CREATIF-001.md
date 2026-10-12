---
mission_id: MISSION-LOT-01-COMMERCIALISATION-CONCEPT-CREATIF-001
owner_agent: AGENT-PRODUCT-OWNER-CONCEPT-CREATIF-001
product: Concept Créatif B2B
date: 2026-10-12
status: EXECUTION_INTERNE_FAITE_ATTENTE_VALIDATION_ET_BLOCAGES
mode: OPERATIONNEL_A_LA_DEMANDE
execution_branch: po-concept-creatif-pilot
schedule: none
supersedes_scope: premiere_version_centree_sur_refaire_la_presentation_399
---
# Lot opérationnel 01 — Acquisition interne ChatGPT Ads (candidat révisé)

## Correctif d'état — arbitrage du 12 octobre 2026
Patrick confirme que **la présentation de l'offre stratégique à 399 $ sur https://win.conceptcreatif.com/ est TERMINÉE**. Ne ni la refaire, ni rédiger une autre présentation pour remplacer Win, ni proposer un chantier de conception à 399 $ sous prétexte d'activer Scrum. La commercialisation principale sur `conceptcreatif.com` est un canal complémentaire; le site principal n'est PAS une raison de requalifier comme inachevé le livrable réalisé sur Win.

La mission initialement écrite ici, « rendre l'offre principale visible » avec rédaction intégrale de l'offre à 399 $, est **ANNULÉE comme lot 01**. Les hypothèses de parcours réciproque site mère–Win ne sont pas un travail autorisé ni nécessaire au lancement du Product Owner; elles demeurent seulement des éléments de backlog si Patrick en confirme l'utilité.

## Product Goal candidat remplaçant
**Préparer une décision d'intégration des nouveaux visuels aux deux annonces ChatGPT Ads EXISTANTES de Concept Créatif, sans créer de publicité supplémentaire, sans modifier les annonces et sans activer ni dépenser de budget.**

Ceci est un **candidat** parmi les travaux ouverts : le Product Owner devra le confirmer contre les priorités courantes lors de son activation. Si Patrick désigne plutôt le développement des offres PPC/GEO, ne pas imposer ce lot publicitaire.

## Source et faits acquis
- Backlog maître : https://docs.google.com/document/d/1e3PSJKvAgkz6-9MyRt8Jm15BkVtxoXjILj1DUQmsiaw/edit
- Offre 399 $ terminée : https://win.conceptcreatif.com/ ; prix promotionnel confirmé 399 $ CAD, prix de référence 798 $ CAD.
- Site de l'entreprise (autres services) : https://conceptcreatif.com/
- Trois images candidatures déjà reçues et stockées : https://drive.google.com/drive/folders/1ue8QcesGY-AMkaEN-vs-e6hjstp9MzH4
- Objet prioritaire existant : CC-20261012-04 (remplacer les images de deux annonces EXISTANTES), distinct de CC-20261012-01/02 (offres de services client PPC et GEO).
- Contrat opérationnel préparé : `agents/CONTRAT-OPERATIONNEL-PO-CONCEPT-CREATIF-001.md`.

## Travaux bornés si le candidat est retenu
1. **Lecture état zéro :** via le compte publicitaire autorisé, identifier les deux annonces ciblées, leurs identifiants, leur statut actuel et leur visuel; ne pas confondre annonces et campagne ni présumer qu'elles diffusent.
2. **Proposition visuelle :** comparer les trois fichiers candidats présents dans la voûte aux deux annonces, leurs promesses/prix/CTA et exigences techniques de la plateforme. Préparer la correspondance recommandée annonce → nouveau visuel, avec preuve et remarque sur l'éventuelle promesse « hébergement gratuit à vie ».
3. **Passage en décision :** soumettre les remplacements proposés et les éventuels changements d'état publicitaire à Patrick. Ne modifier annonces/campagnes/budgets qu'après autorisation explicite spécifique.
4. **Vérification et backlog :** après toute action effectivement autorisée, relire l'état publicitaire et actualiser le backlog existant. Ne pas marquer « terminé » avant preuve.

## Hors périmètre
- Recréer ou réécrire l'offre à 399 $ : **TERMINÉ selon Patrick**.
- Modifier `conceptcreatif.com` ou `win.conceptcreatif.com` : **AUCUN MANDAT**.
- Créer les pages des prestations PPC client et GEO : tâches distinctes toujours au backlog, sujet possible d'un autre lot après priorisation.
- Activer le suivi autonome, des crons/agents permanents, déployer `main`, publier, modifier les annonces ou engager des dépenses : **NON AUTORISÉ**.

## Statut
**ACTIVÉ À LA DEMANDE ET EXÉCUTÉ JUSQU'AU CONTRÔLE DES CANDIDATS.** Le remplacement des visuels reste non exécuté, en attente de validation spécifique et de rétablissement des lectures détaillées. Aucun agent permanent.


## PREMIÈRE EXÉCUTION DU LOT — 12 OCTOBRE 2026 — CONTRÔLE RÉEL

Statut : **LECTURE ET PROPOSITION EXÉCUTÉES; MODIFICATION PUBLICITAIRE NON AUTORISÉE / BLOQUÉE**.

### Compte publicitaire résolu
- Compte accessible : `conceptcreatif@gmail.com`, devise CAD (confirmé par `list_ad_accounts`).
- Une seule campagne répertoriée : `conceptcreatif@gmail.com campaign 1`, **is_draft=true**, **status=paused**, objectif clicks, ciblage Québec.
- Un seul groupe `one pager`, **is_draft=true**, **status=paused**, stratégie maximize_clicks.
- Deux annonces répertoriées, **is_draft=true**, **status=paused**, **review_status=in_review** :
  1. `Votre 1re page Web` — titre identique, texte : « Page de conversion à 399 $. Mise en ligne rapide, sans frais mensuels d’hébergement. »; destination `https://win.conceptcreatif.com/`.
  2. `Ad 1 One Page` — titre `Votre 1re landing page`, texte : « Landing page complète à 399 $. Aucun frais récurrent d’hébergement. Découvrez comment. »; destination `https://win.conceptcreatif.com/`.
- **Aucune publicité active établie**, aucun changement effectué.
- Limite concrète du connecteur : `get_campaign` a répondu 404 et les deux `get_ad` ont répondu 404 après découverte par les outils de liste. `get_ad_group` a réussi. La lecture détaillée requise pour un diff sûr n'est donc pas garantie. **Interdiction de mutation avant résolution et nouvelle lecture des annonces.**

### Trois images originales inspectées
Dossier confirmé : https://drive.google.com/drive/folders/1ue8QcesGY-AMkaEN-vs-e6hjstp9MzH4 .
Toutes : JPEG 1536 × 1536, < 1 Mo, donc au-dessus de la plage 640–1200 recommandée pour un nouveau visuel publicitaire. La règle de traitement des assets du connecteur exige aussi pour les nouvelles images d'annonce des sources visuelles autonomes, sans CTA, prix/badges promotionnels ni interfaces de placement dans l'image. **Les originaux ne répondent pas tels quels au contrôle éditorial source-artwork du workflow ; ne pas les télécharger vers Ads sans dérivé validé.**

- `CC-ADS-20261012-01` : https://drive.google.com/file/d/1-bYLgRoa5gzCojGx3A4x9ICQKqi-Nliu/view ; accroche « Votre entreprise en ligne. Maintenant. », « Landing page complète • 399 $ », et promesse « Hébergement gratuit à vie » + CTA.
- `CC-ADS-20261012-02` : https://drive.google.com/file/d/1Tu-CTiij5vWZ3AWteLZqAZzrm77RpgCx/view ; accroche « Votre 1re page web », « Page de conversion efficace », « Rapide / Clair / Sans frais d'hébergement », prix 399 $.
- `CC-ADS-20261012-03` : https://drive.google.com/file/d/1cOI-KjQHREFQ5OLicUeiNRU7oqhKZuYL/view ; accroche « Pas de site ? Commencez ici », landing page 399 $, « hébergement gratuit à vie » + CTA.
- Les images 01 et 03 présentent une promesse `gratuit à vie` **plus absolue** que le texte publicitaire `sans frais récurrents/mensuels`. Faire arbitrer la conformité au contrat commercial avant toute mise en ligne. Ne jamais corriger les originaux sans conserver les masters.

### Correspondance candidate, non approuvée
- Annonce `Votre 1re page Web` → candidat image **02** (`Votre 1re page web`), cohérence du message.
- Annonce `Votre 1re landing page` → candidat image **03** (`Pas de site ? Commencez ici`), angle prospect sans présence Web, sous réserve de la promesse `gratuit à vie`.
- Image **01** conservée en réserve pour un éventuel test, non assignée.

**Cette proposition n'est pas une autorisation d'intégration.** Aucune image n'a été transformée, redimensionnée, téléversée, affectée à une annonce ni publiée. Les annonces, textes, fichiers images existants, campagnes et budgets sont inchangés.

### Critères bloquants avant une éventuelle modification Ads
1. Résoudre l'anomalie `get_ad` / `get_campaign` et obtenir l'état créatif actuel par lecture détaillée.
2. Obtenir un visuel réellement admissible au format d'image-source, dérivé approuvé si nécessaire, et vérifier les promesses d'hébergement.
3. Montrer et faire valider à Patrick l'état final complet de chaque annonce (textes et URL préservés, statut inchangé) avant tout upload/changement; ne pas confondre accord pour lancer le lot et accord pour écrire sur le compte Ads.
