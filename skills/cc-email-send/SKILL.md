---
name: cc-email-send
description: Traiter la file HubSpot vérifiée CC-PRET-ENVOI, personnaliser un email, envoyer depuis Gmail et inscrire la preuve d'envoi.
---

# Skill — Envoi commercial Concept Créatif

**Rôle strict :** livrer les messages aux prospects qualifiés, sans recherche de nouveaux contacts. Inspiration : séparation OpenOutFind / OpenOutSend dans https://github.com/eracle/OpenOutreach et recommandations https://github.com/LaGrowthMachine/gtm-system ; ces programmes ne sont pas installés, aucun fournisseur de données/SMTP externe actif.

**Séquence :**
1. Compter Gmail SENT du jour, retrouver les 89 messages éditeurs du 16 octobre et tous les échanges existants avec chaque nouvelle cible; calculer le reliquat au plafond interne de 100 messages commerciaux / jour.
2. Dans HubSpot, lire les CONTACT `OPEN`, **exiger aussi** une note privée `CC-PRET-ENVOI` comprenant preuve de consentement, URL et date, poste, pertinence du service, entreprise et contrôle des doublons. Sans la note, ne pas envoyer.
3. Vérifier à nouveau avant expédition absence de refus, retrait, rebond, conflit de groupe et admissibilité LCAP; lire la signature postale autorisée depuis le contexte privé de mission et ne JAMAIS recopier cette adresse dans GitHub public.
4. Adapter une phrase au poste et au secteur; offre = audit des problèmes d'adoption de l'IA (SAVOIRS/OPÉRATIONS/OUTILS), méthode à enseigner ou solution utile selon le diagnostic; lien https://conceptcreatif.com/ , page édition si pertinent, rendez-vous https://calendar.app.google/7JdrkaHN8RLbRHxz5 ; permettre réponse et désabonnement simple.
5. Envoyer depuis le compte Gmail autorisé. Vérifier message SENT + adresse exacte + message ID. Après preuve seulement, écrire dans HubSpot `ATTEMPTED_TO_CONTACT` et note `CC-ENVOYE` avec preuve, et actualiser le compteur agrégé dans le backlog maître. Si refus de connecteur ou erreur : `BLOQUÉ`, **zéro envoyé**.
6. Passer au prochain contact prêt seulement. Ne jamais créer des contacts fictifs ou multiplier les appels pour contourner les limites. Si la file n'est pas fournie ou un prérequis manque, remonter `FILE_VIDE` / `NON_QUALIFIE` au PO.

**Bilan journalier obligatoire** en fin de journée : `date | contacts READY au début | messages SENT avec preuve | total / 1000 | erreurs | file restante | réponse/rendez-vous constatés | prochaine étape`.

**Test :** un passage de la file HubSpot jusqu'à Gmail SENT/HubSpot/backlog doit être prouvé avant toute affirmation de « pipeline automatisé testé ».
