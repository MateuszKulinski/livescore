const express = require('express');
const router = express.Router();

const matchActions = require('../controllers/api/matchActions');
const teamActions = require('../controllers/api/teamActions');
const competitionsActions = require('../controllers/api/competitionsActions');

router.get('/matches', matchActions.getLiveMatches);
router.get('/matches/:id', matchActions.getSingleMatch);
router.get('/teams/:id', teamActions.getTeam);
router.get('/teams/competitions/:id', competitionsActions.getTeamCompetitions);
router.get('/competitions/all', competitionsActions.getAllCompetitions);
router.get('/competitions/scores/:id', competitionsActions.getScores);
router.get('/competitions/standings/:id'), competitionsActions.getStandings);

module.exports = router;