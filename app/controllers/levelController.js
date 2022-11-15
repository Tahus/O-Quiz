require("dotenv").config();
const Level = require("../models/level");



/*
Avant factoristation

J'appelle la méthode AR de Level
Ici pas besoin d'instancier la méthode avec une class new Level
car findAll() est une methode static donc utilisable directement sur la class
Level.findAll((error, levels) => {
  if (error) {
    console.log(error);
  } else {
    console.log(levels);
  };

  Level.findById(1, (error, level) => {
    if (error) {
      console.log(error);
    } else {
      console.log(level.toString());
    }
  });

  insertion côté controller
  const level = new Level({
    name: 'Hard'
  });

  level.insert((error, result) => {
    if (error) {
        console.log(error);
    } else {
        console.log(result.toString());
    }
  });
}); */
/*
Level.findAll((error, levels) => {
  if (error) {
    log(error);
  } else {
    console.log(levels);
  }
});*/

const level = new Level({
  name: "Très dur"
});

level.insert((error, level)=>{
  if (error) {
    console.log(error);
  } else {
    console.log(level.name);
  }
});
