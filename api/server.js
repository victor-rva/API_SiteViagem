const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const path = require('path');

// Routes
const categoriaRoutes = require('./routes/categoriaRoutes');
const cidadeRoutes = require('./routes/cidadeRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');
const pacoteRoutes = require('./routes/pacoteRoutes');
const ped_pacRoutes = require('./routes/ped_pacRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET' 
}));

app.get('/', (req, res) => {
  res.send('API FUNCIONANDO!')
});

// Chamando rotas
app.use('/categoria', categoriaRoutes);
app.use('/cidade', cidadeRoutes);
app.use('/cliente', clienteRoutes);
app.use('/pacote', pacoteRoutes);
app.use('/pedido', pedidoRoutes);
app.use('/ped_pac', ped_pacRoutes);

app.listen(port, () => {
  console.log(`Servidor executando em http://localhost:${port}`);
});
