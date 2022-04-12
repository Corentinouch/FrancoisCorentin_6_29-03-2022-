const express = require("express");
const app = express();
const mongoose = require('mongoose');
const sauceRoutes = require('./routes/sauce');
const authRoutes = require('./routes/user');
const cors = require("cors");
const path = require('path');


mongoose.connect('mongodb+srv://Piquante:piquante@cluster0.pjkle.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.log(error));

app.use(express.json());
app.use(cors());

app.use("/api/sauces",sauceRoutes);
app.use("/api/auth",authRoutes);
app.use("/images", express.static(path.join(__dirname, 'images')));

app.listen("3000", () => {
    console.log("Listen on port 3000");
});