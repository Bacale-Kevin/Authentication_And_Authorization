const Suggestion = require("../models/suggestion");

exports.getSuggestions = (req, res, next) => {
  Suggestion.Suggestion.findAll()
    .then(result => res.json(result))
    .catch(error => res.json(error));
};

exports.createSuggestion = (req, res, next) => {
  Suggestion.Suggestion.create({
    title: req.body.title,
    body: req.body.body,
    userId: req.body.userId
  })
    .then(result => {
      res.status(201).json(result);
    })
    .catch(error => res.json(error));
};

//The correct way to make an update using sequelize pg
exports.updateSuggestion = (req, res, next) => {
  const SuggestionId = parseInt(req.params.id);
  Suggestion.Suggestion.findOne({ where: { id: SuggestionId } }).then(
    suggestionInstance => {
      return suggestionInstance
        .update({
          title: req.body.title,
          body: req.body.body,
          userId: req.body.userId
        })
        .then(result => res.json(result))
        .catch(error => res.json(error));
    }
  );
};

exports.getOneSuggestion = (req, res, next) => {
  const id = parseInt(req.params.id);
  Suggestion.Suggestion.findOne({ where: { id: id } })
    .then(result => {
      if (!result) {
        res.send("Suggestion not found! :-(");
      }
      res.json(result).status(200);
    })
    .catch(error => res.json(error));
};

exports.deleteSuggestion = (req, res, next) => {
  const SuggestionId = parseInt(req.params.id);
  Suggestion.Suggestion.destroy({ where: { id: SuggestionId } })
    .then(result => {
      if (!result) {
        res.send("Suggestion not found");
      }
      res.send(`Suggestion with id:${SuggestionId} deleted successfully`).status(200);
    })
    .catch(error => res.json(error));
};
