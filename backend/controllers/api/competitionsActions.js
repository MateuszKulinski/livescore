const { options, api_v } = require('../../config')
const https = require('https');
let response = {};

class competitionsActions {
    //List goal scorers for a particular competition.
    getScores(req, res) {
        //id League
        const id = req.params.id;
        options.path = `${api_v}/competetions/${id}/scores`;
        try {
            https.get(options, resHttps => {
                resHttps.on('data', data => {
                    response += data;
                })
                resHttps.on('end', () => {
                    res.status(200).send(response);
                });
            }).on('error', error => {
                throw new Error(error);
            });
        } catch (err) {
            return res.status(err.status).json({ message: err.message });
        }
    }

    //List one particular competition.
    getAllCompetitions(req, res) {
        options.path = `${api_v}/competitions/2000`;
        try {
            https.get(options, resHttps => {
                resHttps.on('data', data => {
                    response += data;
                })
                resHttps.on('end', () => {
                    res.status(200).send(response);
                });
            }).on('error', error => {
                throw new Error(error);
            });
        } catch (err) {
            return res.status(err.status).json({ message: err.message });
        }
    }

    //Show Standings for a particular competition.
    getStandings(req, res) {
        //id League
        const id = req.params.id;
        options.path = `${api_v}/competitions/${id}/standings`;
        try {
            https.get(options, resHttps => {
                resHttps.on('data', data => {
                    response += data;
                })
                resHttps.on('end', () => {
                    res.status(200).send(response);
                });
            }).on('error', error => {
                throw new Error(error);
            })
        } catch (err) {
            return res.status(err.status).json({ message: err.message });
        }
    }

    //List all matches for a particular competition.
    getMatches(req, res) {
        //id League
        const id = req.params.id;
        options.path = `${api_v}/competitions/${id}/matches`;
        try {
            https.get(options, resHttps => {
                resHttps.on('data', data => {
                    response += data;
                })
                resHttps.on('end', () => {
                    res.status(200).send(response);
                });
            }).on('error', error => {
                throw new Error(error);
            })
        } catch (err) {
            return res.status(err.status).json({ message: err.message });
        }
    }

    //List all teams for a particular competition.
    getTeamCompetitions(req, res) {
        const id = req.params.id;
        options.path = `/${api_v}/competitions/${id}/teams`;
        let response = {};
        try {
            https.get(options, resHttps => {
                resHttps.on('data', data => {
                    response += data;
                })
                resHttps.on('end', () => {
                    res.status(200).send(response);
                });
            }).on('error', error => {
                throw new Error(error);
            });
        } catch (err) {
            return res.status(err.status).json({ message: err.message });
        }
    }
}

module.exports = new competitionsActions();