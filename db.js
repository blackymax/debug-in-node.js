const Sequelize = require('sequelize');
                                //database username   password
const sequelize = new Sequelize('gamedb', 'postgres', 'MAXIMus2013', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    port: 5433
})

const User = require('./models/user')(sequelize, Sequelize);
const Game = require('./models/game')(sequelize, Sequelize);

sequelize.authenticate().then(() => {
        console.log("Connected to DB");
    },
    (err) => {
        console.log(`Error: ${err}`);
    }
)

module.exports = { sequelize, User, Game };
