# Yfitops - Service de streaming musical
## A propos d'Yfitops
Yfitops est un service de streaming musical sous forme de site web. Cette plateforme a été développée dans le but de permettre aux utilisateurs de créer leurs propres playlists et de suivre des playlists déjà créées par d'autres utilisateurs.
L'interface est très basique : 
- une barre de menu latérale à gauche dans laquelle se retrouvent les différentes pages du site (menu, profil, administration) ainsi que la liste des playlists publiques et privées
- à droite du menu, le contenu de chaque page 

### Contenu du site
La page d'accueil contient la liste des playlists publiques les plus populaires (en fonction de leur nombre d'écoute) ainsi que la liste des dernières playlists écoutées par l'utilisateur s'il est connecté. En cliquant sur une playlist on peut voir le détail de celle ci : la liste de toutes les musiques et de leurs détails.
Sur la page de profil, l'utilisateur connecté peut éditer ses informations et voir la liste des playlists qu'il a créé.
La page d'administration contient 4 onglets : "musiques", "playlists", "utilisateurs" et "catégories". Chacune de ses pages contient un tableau regroupant l'intégralité des informations enregistrées en base de données, permettant de les modifier ou de les supprimer. Un bouton permet également de créer de nouvelles entités.

### Technologies utilisées
- React JS
- Node JS
- MongoDBCompass

## Installer le projet
### Base de données
Creer une base de données MongoDB
Y importer les fichiers "categories.json" puis "users.json"

### Configuration
Dupliquer les fichiers .env.example et les renommer .env
Compléter les fichiers .env dans les dossiers back et front

### Lancer le projet
#### Dans le dossier back:
- npm install / yarn install
- npm run dev / yarn dev
#### Dans le dossier front
- npm install
- npm start 

## Difficultés rencontrées
- Manque de temps
- Blocage sur certaines fonctionnalités du fait du manque de connaissances
- Gérer des fichiers de champs multiples vers des dossiers multiples selon leur mimetype à partir sd'une seule fonction
- Les updates d'entités contenant des fichiers entrainement la suppression du fichier précédent même quand celui ci n'a pas été modifié

