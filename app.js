const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const usuario_controller = require('./usuario_controller');
const vacina_controller = require('./vacina_controller');
const local_controller = require('./local_controller');
const vacinacao_controller = require('./vacinacao_controller');
const app = express();


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());

mongoose.connect(
    'mongodb://localhost:27017/projeto_tcc',
    {useNewUrlParser: true});
    
app.use('/usuarios', usuario_controller);
app.use('/vacinas', vacina_controller);
app.use('/locals', local_controller);
app.use('/vacinacaos', vacinacao_controller);

app.listen(3000);