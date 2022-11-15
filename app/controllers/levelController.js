require("dotenv").config();
const Level = require("../models/level");

//Méthode d'instance
/*
const newLevel = new Level({
  name: "Super Difficile"
});

newLevel.insert((error, level)=>{
  if (error) {
    console.log(error);
  } else { 
    console.log(`${newLevel.name} a bien été ajouté à la bdd !`);
  }
});


//Update level

Level.findById(24, (error, level)=>{
  if (error) {
    console.log(error);
  }else {

    level.name = "Super Chaud";
    level.update((error, level)=>{
      if (error) {
        console.log(error);
      } else {
        console.log(`${level.name} à été modifié ! :)`);
      }
    })
  }
});


//DELETE

Level.findById(24, (error, level)=>{
  if (error) {
    console.log(error);
  }else {

    level.delete((error, level)=>{
      if (error) {
        console.log(error);
      } else {
        console.log(`${level.name} à été supprimé ! :)`);
      }
    })
  }
}); */
Level.findById(26, (error, lvl)=>{
  if (error) {
    console.log(error);
  } else {
    lvl.name="Ultra dur";
    lvl.save((error, level) =>{
      if (error) {
        console.log(error);
      } else {
        console.log(lvl);
      }
    })
  }
})




