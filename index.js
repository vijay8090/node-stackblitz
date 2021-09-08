const express = require('express');
const app = express();
const config = require('./config.js');
const routes = require('./routes.js');

app.use(routes);

app.listen(config.PORT, ()=> {
    console.log("Node REST is listening in port ", config.PORT);
})
