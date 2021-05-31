const express = require('express');
const router = express.Router();

const userActions = require('../controllers/api/userActions');
const matchActions = require('../controllers/api/matchActions');
const teamActions = require('../controllers/api/teamActions');
const competitionsActions = require('../controllers/api/competitionsActions');

router.post('/signup', userActions.signUp);
router.post('/signin', userActions.signIn);

router.get('/matches', matchActions.getLiveMatches);
router.get('/matches/today/:date', matchActions.getDateMatches);
router.get('/matches/:id', matchActions.getSingleMatch);
router.get('/matches/players/:id', matchActions.getSinglePlayerMatches);

router.get('/teams/:id', teamActions.getTeam);
router.get('/areas/:id', teamActions.getArea);
router.get('/players/:id', teamActions.getPlayer);

router.get('/competitions/scores/:id', competitionsActions.getScores);
router.get('/competitions/all', competitionsActions.getAllCompetitions);
router.get('/competitions/standings/:id', competitionsActions.getStandings);
router.get('/competitions/matches/:id', competitionsActions.getMatches);
router.get('/teams/competitions/:id', competitionsActions.getTeamCompetitions);

module.exports = router;