require("dotenv").config();
//J'import la class dont j'ai besoin à partir du ficher catalogue (index.js)
const {Level} = require("../models")

//La promesse remplace la callback grace à .then
//une fois que findAll() me retourne quelque chose, alors fais ce qu'il y a entre les parenthèse du .then()
/*Level.findAll()
.then(levels => console.log(levels))
.catch(error => console.log(error));*/


//Je récupére le niveau avec les questions correspondantes
Level.findByPk(3, {
    include: 'questions'
}).then((level) =>{
    console.log(level);
}).catch((error) => {
    console.log(error);
});
  





