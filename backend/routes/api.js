const express = require('express');
const router = express.Router();

const matchActions = require('../controllers/api/matchActions');

router.get('/matches', matchActions.getMatches);

module.exports = router;