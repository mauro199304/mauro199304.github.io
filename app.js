const express = require('express');
const morgan = require('morgan');
const app = express();
const jwt = require("jsonwebtoken");
const ejs = require('ejs');
const path = require('path');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require("cors");
const { refreshToken, generate, Recaptcha, verifyUsers } = require('./Mis-modulos/moduloUno.js');
const base = require("./models/mongo-model");

const mySecretKey = process.env['SECRET_KEY'];
const user = process.env['SECRET_USERS'];
const passw = process.env['SECRET_PASSWORD'];

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');


// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
/*
app.use("/", (req, res, next) => {
  req.session.data = "True";
  next();
});

*/

// routes
app.use(require('./routes'));
app.use('/api/initR',
  require('./routes/initR'));
app.use('/api/usuarios',
  require('./routes/usuarios'));
app.use('/api/writeURI',
  require('./routes/writeURI'));
app.use('/api/videos',
  require('./routes/videos'));

app.get("/", async (req, res) => {
//  console.log(req.session.data);
  const document = await base.find();
  const urlHome = document[0].urlHome;
 console.log(document[2].url)
  res.render('index.ejs', { url: urlHome });
})


app.get('/dashboard', refreshToken, async (req, res) => {
  const document = await base.find();
  const ok = JSON.stringify(document[3]);
  //console.log(ok["url"]);
 const urlDashboard = document[0].urlDashboard;
 res.render('dashboard.ejs', { data: document, url: urlDashboard });
})



app.post("/login", verifyUsers, Recaptcha, (req, res) => {
  //console.log(req.body);
  return res.send('<script>alert("Modo Administrador");window.location.href="/dashboard";</script>');

});






// starting the server

module.exports = app;
