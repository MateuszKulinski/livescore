const { options, axiosOptions, api_v, hostUrl } = require('../../config')
const https = require('https');
const axios = require('axios');
let response = {};

class matchActions {
    //List of LIVE matches
    async getLiveMatches(req, res) {
        //id Team
        await axios.get(`${hostUrl}${api_v}/matches?status=LIVE`, axiosOptions)
            .then((value) => {
                res.status(200).send(value.data);
            }).catch((error) => {
                res.status(error.status).json({ message: error.message });
            });
    }
    async getDayMatches(req, res) {
        //id Team
        const formatYmd = date => date.toISOString().slice(0, 10);
        let date = formatYmd(new Date());
        await axios.get(`${hostUrl}${api_v}/matches?dataFrom=${date}&dataTo=${date}`, axiosOptions)
            .then((value) => {
                console.log(value);
                res.status(200).send(value.data);
            }).catch((error) => {
                res.status(error.status).json({ message: error.message });
            });
    }
    

// Example
    // getLiveMatches(req, res) {
    //     options.path = `${api_v}/matches?status=LIVE`;
    //     try {
    //         https.get(options, resHttps => {
    //             resHttps.on('data', data => {
    //                 response += data;
    //             })
    //             resHttps.on('end', () => {
    //                 res.status(200).send(response);
    //             });
    //         }).on('error', error => {
    //             throw new Error(error);
    //         });
    //     } catch (err) {
    //         return res.status(err.status).json({ message: err.message });
    //     }
    // }    

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