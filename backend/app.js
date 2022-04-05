const express = require("express");
const app = express();
const mongoose = require('mongoose');
const sauceRoutes = require('./routes/sauce');
const authRoutes = require('./routes/user');


mongoose.connect('mongodb+srv://Corentinouch:football2018@cluster0.pjkle.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(express.json());

app.use("/sauces",sauceRoutes);
app.use("/auth",authRoutes);

app.listen("3000", () => {
    console.log("Listen on port 3000");
});