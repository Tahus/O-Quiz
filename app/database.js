const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL,{
    define: {
        //l'option est à false car je n'ai pas de champs created_at et updated_ad dans mes tables
        timestamps: false
    }
});


module.exports = sequelize;