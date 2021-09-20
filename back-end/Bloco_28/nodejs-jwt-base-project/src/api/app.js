const express = require('express');
const bodyParser = require('body-parser');
const routs = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiRoutes = express.Router();
apiRoutes.get('/api/posts', routs.getPosts);
apiRoutes.post('/api/users', routs.createUsers);
apiRoutes.post('/api/login', routs.login);

app.use(apiRoutes);

module.exports = app;