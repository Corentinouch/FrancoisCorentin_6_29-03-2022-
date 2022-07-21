require ("dotenv").config();
const rateLimit = require ("express-rate-limit")
const helmet = require("helmet");

const express = require("express");
const app = express();
const mongoose = require('mongoose');
const sauceRoutes = require('./routes/sauce');
const authRoutes = require('./routes/user');
const cors = require("cors");
const path = require('path');

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

mongoose.connect(process.env.MONGO_URL,
{ useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.log(error));

app.use(express.json());
app.use(cors(
  {origin: '*'}
));

app.use("/images", express.static(path.join(__dirname, 'images')));
app.use(helmet());

app.use(limiter);

app.use("/api/sauces",sauceRoutes);
app.use("/api/auth",authRoutes);


app.listen("3000", () => {
    console.log("Listen on port 3000");
});