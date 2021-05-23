const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(`${__dirname}/dist/hecd`));

app.get('/*', (req,res) => res.sendFile(path.join(`${__dirname}/dist/hecd/index.html`)));

const hora = new Date().getHours();
const minutos = new Date().getMinutes();
const segundos = new Date().getSeconds();

app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${port} ${hora}:${minutos}:${segundos}`));