# Carnet CC — Contrat de données opérationnel JSON v1.1
Décision commune PO ZAPS / PO Concept Créatif — 22 octobre 2026. Ce document précise l'usage du **schéma racine existant** \`schema_version: 1\` et ne force ni migration, ni backend nouveau.

## Contenant et publication
- Fichier JSON **privé** dans Drive, ID stable ; \`catalogue_revision\` change à chaque publication, \`production_ready\` seulement si contrôles réussis.
- \`contacts[]\`, max 1000, sous 2 Mio ; \`contact_id\` numérique stable de 1 à 18 chiffres, \`rank\` entier positif UNIQUE, \`statut_admissibilite: "APPROUVE"\` et \`exclu: false\`, \`opposition: false\` + téléphone pour déclencher Appeler.
- Ni fiches, ni numéros, ni courriels, ni notes dans un dépôt GitHub public.
- Le PO commercial est le seul auteur de la priorité et du contenu; l'APK ne les déduit pas et ne transforme pas \`rank\` ou l'ancien \`score\` en classement certifié.
- \`priorityValidated: true\` + \`priorityLabel\` **validé** donnent une priorité qualitative visible. Sinon l'écran affiche « Appel exploratoire » (la position d'un enregistrement n'est pas une priorité).
- Le PO filtre les refus/oppositions attestés en amont. Historique vide = aucune mention sur la fiche.

## Champs de présentation (clés exactes)
- \`company\`, \`sector\`, \`companySize\` (source interne détaillée acceptable; Android affiche uniquement la tranche 2–10, 10–25, etc.), \`name\`, \`role\`, \`phone\`.
- \`website\` : URL HTTP(S) officielle **vérifiée** ; si absente, cacher le bouton.
- \`professionalProfileUrl\` : URL HTTP(S) publique vérifiée, jamais description \`profile\` interprétée comme lien. Si absente, cacher le bouton.
- \`companyPortrait\` : 60–110 mots factuels sur secteur, services, clients, spécialisations, réalisations. Ne pas copier la fiche de qualification.
- \`personPortrait\` : 25–70 mots factuels (parcours, réalisations, position). Absent si aucune biographie publique fiable ; ne pas écrire de paragraphe sur cette absence.
- \`opportunity\` : 30–65 mots décrivant pourquoi un échange sur la proposition de Concept Créatif a du sens; ne pas attribuer un besoin non attesté.
- \`opening\` : une **entrée en matière** personnalisée, naturellement fondée sur le métier ou une réalisation, sans dire « suite à notre courriel » quand la réception n'est pas certaine.
- \`questions\` : 2–4 questions réellement adaptées au prospect. L'ouverture est affichée **avant** elles.
- \`priorContact\` : bref renseignement d'échange antérieur réel et pertinent, facultatif. Zéro texte sur l'absence de courriels ou les recherches Gmail.
- \`verificationSources\` et anciens \`sizeEvidence\`, \`risk\`, \`qualificationNote\`, \`historiqueProspection\` : usage **interne et audit**, jamais affichage dans l'interface d'appel.
- \`photoUrl\` : option de future version seulement. N'ouvre aucun chantier de collecte systématique.

## Contrôles prépublication PO Concept Créatif
Identité exacte / rôle / téléphone publiquement vérifiés, URL de profil réelle, taille sourcée, activité et réussite documentées, degré de priorité commercial, conformité refus/opposition/doublons par groupe, ouverture et questions ciblées. Les lacunes n'entraînent ni invention ni remplissage automatique de texte. Les 144 anciens contacts **ne sont pas** 144 portraits enrichis.

## Contrôles APK PO ZAPS
Lire les clés facultatives sans changer \`schema_version\`, ne pas ouvrir de texte comme URL, cacher les sections vides, condenser taille, laisser téléphone principal fonctionnel, préserver notes \`contact_id\`, vérifier l'ordre et l'écran sur Pixel 9. Test du même ID Drive après deux révisions; aucune prétention de production tant que cette recette matérielle n'est pas faite.

**État :** contrat défini, développement en cours, tests et déploiement distincts. Références : https://github.com/Orrouk/CCC/issues/12 et https://github.com/Orrouk/CConcept/issues/1
