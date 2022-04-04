const express = require("express");
const app = express();

const sauceRoutes = require('./routes/sauce');

app.use("/sauces",sauceRoutes);

app.listen("3000", () =>{
    console.log("test");
});