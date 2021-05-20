const express = require('express');
const { sequelize } = require('./db');
const user = require('./controllers/usercontroller');
const game = require('./controllers/gamecontroller');

const app = express();

app.use(express.json());

sequelize.sync();
app.use('/api/auth', user);
app.use(require('./middleware/validate-session'));
app.use('/api/game', game);

app.listen(4000, () => {
  console.log(`App is listening on 4000`);
});
