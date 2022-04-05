const express = require("express");
const router = express.Router();
const sauceControl = require('../controllers/sauce')


router.get("/", sauceControl.getAllSauce);

router.get("/:id", sauceControl.getOneSauce);

router.put('/:id', sauceControl.modifySauce);

router.delete('/:id', sauceControl.deleteSauce);

module.exports = router;