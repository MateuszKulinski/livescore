const {
    axiosOptions,
    api_v,
    hostUrl
} = require('../../config');
const axios = require('axios');

module.exports = {
    //List of live matches
    getLiveMatches: async (req, res) => {
        //id Team
        try {
            const value = await axios.get(`${hostUrl}${api_v}/matches?status=LIVE`, axiosOptions);
            res.status(200).send(value.data);
        } catch (error) {
            res.status(error.response.status).json({
                message: error.response.message
            });
        }
    },
    //List of today matches
    getDateMatches: async (req, res) => {
        //id Team
        try {
            const date = req.params.date;
            const value = await axios.get(`${hostUrl}${api_v}/matches?dateFrom=${date}&dateTo=${date}`, axiosOptions);
            res.status(200).send(value.data);
        } catch (error) {
            res.status(error.response.status).json({
                message: error.response.message
            });
        }
    },
    //Show one particular match.
    getSingleMatch: async (req, res) => {
        //id match
        try {
            const id = req.params.id;
            const value = await axios.get(`${hostUrl}${api_v}/matches/${id}`, axiosOptions);
            res.status(200).send(value.response.data);
        } catch (error) {
            res.status(error.response.status).json({
                message: error.response.message
            });
        }
    },
    //Show all matches for a particular player.
    getSinglePlayerMatches: async (req, res) => {
        //id match
        try {
            const id = req.params.id;
            const value = await axios.get(`${hostUrl}${api_v}/players/${id}/matches`, axiosOptions);
            res.status(200).send(value.data);
        } catch (error) {
            res.status(error.response.status).json({
                message: error.response.message
            });
        }
    },
}