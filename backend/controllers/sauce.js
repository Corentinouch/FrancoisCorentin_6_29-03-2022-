const Sauces = require('../models/sauce')

exports.getAllSauce = (req, res, next) => {
    Sauces.find()
      .then(sauces => res.status(200).json(sauces))
      .catch(error => res.status(400).json({ error }))
}

exports.getOneSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
      .then(sauces => res.status(200).json(sauces))
      .catch(error => res.status(400).json({ error }))
};

exports.modifySauce = (req, res, next) => {
    Sauce.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.deleteSauce =  (req, res, next) => {
    Sauce.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };