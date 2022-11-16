- Fabrication du mcd & mld .
- Création de la BDD et du rôle : ```CREATE ROLE oquizz WITH LOGIN PASSWORD 'oquizz';```

```CREATE DATABASE oquizz OWNER oquizz;```


- Création du fichier SQL grâce au mld
- Je crée ma DB dans postgresql et j'importe les scripts sql.

-Je crée mon fichier .env et le rempli avec les variables d'environnement.

- Je crée mon sous-dossier model dans un dossier app , avec une class par fichier (answer,level,question,quiz,tag,user).

-J'install npm et les dépendances (pg, dotenv, express etc..).

-je commence par ajouter les propriétés des différentes class (Answer, Level, Question, Tag, User, Quiz) en me basant sur ce que j'ai rempli dans ma table côté SQL.

-Création d'un fichier/class CoreModel afin de la faire hériter à toutes les class .

-je mets en place les getter/setters afin de ne modifier ou return les valeurs des propriétés uniquement dans les class

-Dans le setter, je rajoute un test afin de vérifier que les données passées en argument soient du bon type. (Facultatif)

-Mise en place d'Active Record, avec un CRUD sur les class depuis la class d'héritage coreModel().

-Mise en place du code avec l'ORM Sequelize. Je n'ai plus besoin de coreModel.js car Sequelize contient déjà les méthodes que j'ai crée dans coreModel.js.

- création d'un fichier index.js dans le dossier model afin de coder les associations entre les tables sql.