
//fichier de comparaison avec la refactoring des methodes

//findAll()

//class User

// callback est la fonction du controller qui attends d'être excécutée
static findAll(callback) {
    //une fois la requette sql est achevée, alors quelque chose sera exécutée (elle attends une erreur ou un resultat)
    //Je ne veux pas renvoyer les objets en dur donc je les parses
    client.query(`SELECT * FROM "user"`, (error, result) => {
      //en cas d'erreur, j'appelle le traitement du controller en lui passant l'erreur et rien en resultat
      if (error) {
        callback(error, null);
      }else {
        // sinon j'effectues le parse: je crée un array dans leqeul je push les instances
        const users = [];
        // pour pouvoir faire un instance sur chaque user je boucle sur le resultat en base de données
        for (const user of result.rows) {
          //Puis, je push dans le tableau une instance représentant l'user actuellement parcouru
          users.push(new User(user));
        }
        //en cas de succès j'effectues le traitement du controller en lui passant le tableau mais pas d'erreur
        callback(null, users);
      }
    });
  };

  

  //class Level

  //static indique qu'on utilise findAll() sur la class et non pas sur l'instance
  static findAll(callback) {
    //au lieu de renvoyer la callback directement avec le resultat brut,
    //je fais transformer le resultat en instance de class pour après le renvoyer au controller
    client.query(`SELECT * FROM level`, (err, result) => {
      // en cas d'erreur j'appelle la callback en lui passant une erreur
      // en second parametre je renvoies aucun resultat
      if (err) {
        callback(err, null);
      } else {
        //transformer les objets bruts (recuperés en base) en instance de class
        //Avant de tranformer les datas, il faut creer un tableau vide pour accueillir les futures instances
        const levels = [];
        //pour transformer les resultats il va falloir boucler dessus car c'est un tableau
        for (const level of result.rows) {
          /*const levelInst = new Level(level);
             levels.push(levelInst);*/
          levels.push(new Level(level));
        }

        callback(null, levels);
      }
    });
  };


  // findById()

  // class Level
  static findById(id, callback) {
    client.query(`SELECT * FROM level WHERE id = $1`, [id], (error, result) => {
      //si erreur, j'appelle le traitement du controller en lui passant l'erreur
      if (error) {
        callback(error, null);
      } else {
        //sinon il fait une instance du level recuperé en base sur l'élément de tableau
        const level = new Level(result.rows[0]);
        //puis il appelle le traitement du controller en lui passant l'instance de level parsé
        callback(null, level);
      }
    });
  };


  // class User

  static findById(id, callback) {
    client.query(
      `SELECT * FROM "user" WHERE id = $1`,
      [id],
      (error, result) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, new User(result.rows[0]));
        }
      }
    );
  };


  // insert ()

  //class Level
  //Instertion d'un enregistrement via une methode d'instance classique, car je pars d'une instance déjà faite
  insert(callback) {
    client.query(
      `INSERT INTO level VALUES(DEFAULT, $1) RETURNING id`,
      [this.name],
      (error, result) => {
        if (error) {
          callback(error, null);
        } else {
          //je mets à jour l'id de l'instance pour le faire correspondre à celui de la base
          //(qui a été généré après l'insertion, rendu dispo avec RETURNING)
          this.id = result.rows[0].id;
          callback(null, this);
        }
      }
    );
  };


  // class User

  // Méthode d'instance car je veux insérer un enregistrement en base par rapport aux infos de l'instance que j'utilise
  // Donc je vais appeler la méthode dessus grâce aux infos que j'ai donné à l'instance, ainsi je vais pouvoir m'en servir pour enregistrer les infos dans la bdd
  insert(callback) {
    client.query(
      `INSERT INTO "user" (email, password, firstname, lastname) VALUES($1, $2, $3, $4) RETURNING id`,
      [this.email, this.password, this.firstname, this.lastname],
      (error, result) => {
        if (error) {
          callback(error, null);
        } else {
          //Je mets à jour l'id de l'instance courante
          this.id = result.rows[0].id;
          callback(null, this);
        }
      }
    );
  };


  // update()

  //class Level

  update(callback) {
    client.query(`UPDATE "level" SET name = $2, WHERE id = $1`, [this.id,this.name], (error, result) =>{
        if (error) {
            callback (error, null);
        } else {
            callback(null, this);
        }
    });
  };


  // class User

  // Méthode d'instance pour mettre à jour les infos de la bdd
  update(callback) {
    client.query(`UPDATE "user" SET email = $2, password = $3, firstname = $4, lastname = $5 WHERE id = $1`, [this.id,this.email, this.password, this.firstname, this.lastname], (error, result) =>{
        if (error) {
            callback (error, null);
        } else {
            callback(null, this);
        }
    });
  };


  // delete()

  //class Level

  delete(callback) {
    client.query(`DELETE FROM "level" WHERE id = $1`,[this.id], (error, result) =>{
        if (error) {
            callback(error, null);
        } else {
            callback(null, true);
        }
    });
  };


  // class User

  delete(callback) {
    client.query(`DELETE FROM "user" WHERE id = $1`,[this.id], (error, result) =>{
        if (error) {
            callback(error, null);
        } else {
            callback(null, true);
        }
    });
  };
