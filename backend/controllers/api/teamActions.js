const { axiosOptions, options, api_v, hostUrl } = require('../../config');
const https = require('https');
const axios = require('axios');

class teamActions {
    //Show one particular team.
    async getTeam(req, res) {
        //id Team
        const id = req.params.id;
        await axios.get(`${hostUrl}${api_v}/teams/${id}`, axiosOptions)
            .then((value) => {
                res.status(200).send(value.data);
            }).catch((error) => {
                res.status(error.status).json({ message: error.message });
            });
    }

    //List one particular area.
    getArea(req, res) {
        //id Area
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
        //id Player
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