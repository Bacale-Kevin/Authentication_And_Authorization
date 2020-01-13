const SuggestionController = require('../controllers/suggestion');
const express = require('express');

const router = express.Router();

router.post('/create', SuggestionController.createSuggestion);
router.get('/suggestions', SuggestionController.getSuggestions);
router.put('/update/:id', SuggestionController.updateSuggestion);
router.get('/:id', SuggestionController.getOneSuggestion);
router.delete('/:id', SuggestionController.deleteSuggestion);


module.exports = router;