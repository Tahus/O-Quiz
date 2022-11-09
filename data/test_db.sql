-- Je créé une transaction pour "sécuriser" notre code SQL, si une erreur survient il supprimera ce qu'il a conçu jusque là au lieu de nous laisser des résidus.

-- Début de la transaction
BEGIN;

-- On supprime toutes les tables pour repartir de 0
DROP TABLE IF EXISTS "user", "theme", "quiz", "question", "level", "answer", "quiz_theme";

-- Je créé les tables

CREATE TABLE "user" (
    -- INT GENERATED ALWAYS AS IDENTITY équivalent du SERIAL
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "login" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT
);

CREATE TABLE "theme" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE
);


    -- clef étrangère, on fait référence à la clef primaire d'une autre table--
CREATE TABLE "quiz" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL UNIQUE,
    "user_id" INT REFERENCES "user"("id")
);

CREATE TABLE "level" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE
);


-- Je ne peut pas mettre directement la clef étrangère qui pointe vers la table answer car celle-ci n'est pas encore créée ! Si je la déplace au dessus de la table question j'aurait exactement le même problème 
--mais pour l'autre table ! Du coup, je vais m'y prendre autrement...--
CREATE TABLE "question" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "question" TEXT NOT NULL UNIQUE,
    "context" TEXT,
    "quiz_id" INT REFERENCES "quiz"("id"),
    "level_id" INT REFERENCES "level"("id"),
    "answer_id" INT
);

CREATE TABLE "answer" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "description" TEXT NOT NULL UNIQUE,
    -- ici pas de soucis, la table question existe au dessus
    "question_id" INT REFERENCES "question"("id")
);

CREATE TABLE "quiz_theme" (
    "quiz_id" INT REFERENCES "quiz"("id"),
    "theme_id" INT REFERENCES "theme"("id"),
    -- la clef primaire de cette table sera LA COMBINAISON des deux clefs étrangères faisant référence aux deux tables ! Pour rappel, on ne peut pas générer plusieurs clefs primaires dans une table, donc pas deux fois SERIAL PRIMARY KEY ou GENERATED ALWAYS AS IDENTITY !
    PRIMARY KEY("quiz_id", "theme_id")
);

-- Je modifie la table question pour lui attribuer la clef ÉtrangÈre manquante !
ALTER TABLE "question" ADD FOREIGN KEY ("answer_id") REFERENCES "answer"("id");

-- fin de la transaction
COMMIT;