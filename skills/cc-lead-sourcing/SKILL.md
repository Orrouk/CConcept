---
name: cc-lead-sourcing
description: Trouver et qualifier des prospects B2B québécois et transmettre des contacts prêts à envoyer au sein du CRM existant, sous le PO Concept Créatif.
---

# Skill — Identifier et qualifier les contacts Concept Créatif

**Rôle de l'agent :** sourcer; ne jamais envoyer. Entrées : Québec francophone, secteurs pertinents, message d'audit adoption IA, exclusions Gmail/HubSpot, liste de refus. Sortie attendue : fiches CRM avec preuve de contact professionnel et de consentement, ou blocage documenté. Savoir-faire inspiré de https://github.com/eracle/OpenOutFind et de la catégorie « Fuel my pipeline » de https://github.com/LaGrowthMachine/gtm-system . **Ces outils externes ne sont pas installés ni autorisés à acheter des crédits par cette référence.** Par défaut, utiliser la recherche Web/sources officielles et les connecteurs CRM déjà disponibles.

## Workflow exécutable avec les connecteurs actuels
1. Lire les objectifs et exclusions du Product Owner : `CC-ACQ-CONTINUE-1000-20261018`.
2. Sélectionner de nouveaux établissements réels avec preuves (site officiel, annuaires professionnels). Segmenter selon le profil client plausible; ne jamais déduire qu'une organisation rencontre une difficulté réelle sans le lui demander.
3. Identifier un contact professionnel dont les fonctions concernent réellement méthodes de travail, formation, opérations, transformation numérique ou direction. Adresses réservées aux manuscrits, abonnements ou relations presse : ne pas les utiliser à d'autres fins sans fondement.
4. Vérifier identité, orthographe, société mère et domaine. Chercher le contact, les sociétés liées, les 89 anciens destinataires, ainsi que toute correspondance Gmail déjà envoyée ou tout refus; arrêter si doublon, rebond ou retrait.
5. **Filtre LCAP individuel** : consentement exprès ou fondement précis de consentement tacite applicable; si publication bien en vue, conserver URL, date, preuve que le titulaire publie l'adresse, absence de mention de refus des MCE et lien direct avec les fonctions de cette personne. Aucun critère unique (une adresse publique, un nom dans l'ANEL, ou une fiche HubSpot) ne suffit seul.
6. Dans HubSpot, utiliser CONTACT/COMPANY existants, statut `NEW` si non qualifié. Si et seulement si TOUS les points sont vérifiés, conserver dans une note privée `CC-PRET-ENVOI | date | source | rôle | entreprise | consentement | pertinence | exclusion vérifiée | angle`, et marquer `OPEN` suivant les autorisations d'écriture disponibles. Cette combinaison constitue la **file de transmission**. Un `OPEN` ancien sans note CC-PRET-ENVOI ne compte pas.
7. Livrer au PO : nombre `DÉCOUVERT`, `QUALIFIÉ`, `PRET_ENVOI`, `BLOQUÉ`, pas le nombre d'emails envoyés. Conserver les coordonnées nominatives seulement dans HubSpot/Drive privés, jamais dans GitHub.

**Sorties interdites :** adresses générées/devinées, données achetées sans autorisation, contacts artificiels, inscription sur une liste marketing HubSpot non approuvée, envoi de message, modification d'une autre campagne ou nouveau backlog.

**Commande externe future non activée :** `outfind find 10` ou `outfind find 10 emails` nécessite l'installation du CLI, sa configuration et éventuellement BetterContact/crédits. Ne pas lancer dans une session éphémère et prétendre à un service pérenne.
