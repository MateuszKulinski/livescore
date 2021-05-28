const { options, api_v } = require('../../config')
const https = require('https');
let response = {};

class matchActions {
    //List of LIVE matches
    getLiveMatches(req, res) {
        options.path = `${api_v}/matches?status=LIVE`;
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

    //Show one particular match.
    getSingleMatch(req, res) {
        //id match
        const id = req.params.id;
        options.path = `${api_v}/matches/${id}`;
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

    //Show all matches for a particular player.
    getSinglePlayerMatches(req, res) {
        //id player
        const id = req.params.id;
        options.path = `${api_v}/players/${id}/matches`;
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

module.exports = new matchActions();