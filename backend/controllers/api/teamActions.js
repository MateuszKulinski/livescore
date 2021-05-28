const { options, api_v } = require('../../config');
const https = require('https');

class teamActions {
    //Show one particular team.
    getTeam(req, res) {
        const id = req.params.id;
        options.path = `/${api_v}/teams/${id}`;
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

    //List one particular area.
    getArea(req, res) {
        const id = req.params.id;
        options.path = `/${api_v}/areas/${id}`;
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

    //List one particular player.
    getPlayer(req, res) {
        const id = req.params.id;
        options.path = `/${api_v}/players/${id}`;
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

module.exports = new teamActions();