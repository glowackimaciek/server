require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Importo routers
const index = require('./routers/index');

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//Użycie routers
app.use('/', index);


//Obsługa nieznanych ścieżek 
app.use((req, res, next) => {
    res.status(404).send('Strona nie została znaleziona')
});

//Obsługa błędów
app.use((req, res, next) => {
    res.status(500).send('Wystapił błąd na serwerze')
});

const PORT = process.env.PORT || 3000; //Ustawia PORT na wartość zapisaną w pliku .env lub 3000

//Start servera
app.listen(PORT, () => {
    console.log(`Server działa na porcie ${PORT}, kliknij http://localhost:3000/`);
});