const express = require('express');
const app = express();
const path = require('path');

// Configuración para servir archivos estáticos
app.use('/public', express.static(path.join(__dirname, 'public')));



// Ruta para la página de inicio
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Rutas para las demás páginas
app.get('/babbage', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'babbage.html'));
});

app.get('/berners-lee', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'berners-lee.html'));
});

app.get('/clarke', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'clarke.html'));
});

app.get('/hamilton', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'hamilton.html'));
});

app.get('/hopper', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'hopper.html'));
});

app.get('/lovelace', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'lovelace.html'));
});

app.get('/turing', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'turing.html'));
});

// Ruta para cualquier otra URL no especificada
app.get('*', (req, res) => {
  res.status(404).send('Página no encontrada');
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
