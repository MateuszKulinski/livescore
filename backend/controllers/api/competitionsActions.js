const {
    axiosOptions,
    api_v,
    hostUrl,
} = require('../../config');
const axios = require('axios');

module.exports = {
    getScores: async (req, res) => {
        try {
            const id = req.params.id;
            const value = await axios.get(`${hostUrl}${api_v}/competetions/${id}/scores`, axiosOptions);
            res.status(200).send(value.data);
        } catch (error) {
            res.status(error.response.status).json({
                message: error.response.message
            });
        }
    },
    //List one particular competition.
    getAllCompetitions: async (req, res) => {
        try {
            const value = await axios.get(`${hostUrl}${api_v}/competetions/2000`, axiosOptions);
            res.status(200).send(value.data);
        } catch (error) {
            res.status(error.response.status).json({
                message: error.response.message
            });
        }
    },
    //Show Standings for a particular competition.
    getStandings: async (req, res) => {
        try {
            //id League
            const id = req.params.id;
            const value = await axios.get(`${hostUrl}${api_v}/competitions/${id}/standings`, axiosOptions);
            res.status(200).send(value.data);
        } catch (error) {
            res.status(error.response.status).json({
                message: error.response.message
            });
        }
    },
    //List all matches for a particular competition.
    getMatches: async (req, res) => {
        //id League
        try {
            const id = req.param.id;
            const value = await axios.get(`${hostUrl}${api_v}/competitions/${id}/matches`)
            res.status(200).send(value.data);
        } catch (error) {
            res.status(error.response.status).json({
                message: error.response.message
            });
        }
    },
    getTeamCompetitions: async (req, res) => {
        try {
            const id = req.param.id;
            const value = await axios.get(`${hostUrl}${api_v}/competitions/${id}/teams`);
            res.status(200).send(value.data);
        } catch (error) {
            res.status(error.response.status).json({
                message: error.response.message
            });
        }
    },
}