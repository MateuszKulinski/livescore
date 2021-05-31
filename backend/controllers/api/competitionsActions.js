const { axiosOptions, api_v, hostUrl, options } = require('../../config');
const axios = require('axios');

class competitionsActions {
    //List goal scorers for a particular competition.
    async getScores(req, res) {
        const id = req.params.id;
        let value = await axios.get(`${hostUrl}${api_v}/competetions/${id}/scores`, axiosOptions)
            .catch((error) => {
                return res.status(error.status).json({ message: error.message });
            });
        res.status(200).send(value.data);
    }
    //List one particular competition.
    async getAllCompetitions(req, res) {
        let value = await axios.get(`${hostUrl}${api_v}/competetions/2000`, axiosOptions)
            .catch((error) => {
                return res.status(error.status).json({ message: error.message });
            });
        res.status(200).send(value.data);
    }
    //Show Standings for a particular competition.
    async getStandings(req, res) {
        //id League
        const id = req.params.id;
        let value = await axios.get(`${hostUrl}${api_v}/competitions/${id}/standings`, axiosOptions)
            .catch((error) => {
                return res.status(error.status).json({ message: error.message });
            });
        res.status(200).send(value.data);
    }
    //List all matches for a particular competition.
    async getMatches(req, res){
        //id League
        const id = req.param.id;
        let value = await axios.get(`${hostUrl}${api_v}/competitions/${id}/matches`)
            .catch((error) => {
                return res.status(error.status).json({ message: error.message });
            });
        res.status(200).send(value.data);
    }
    async getTeamCompetitions(req, res){
        let id = req.param.id;
        let value = await axios.get(`${hostUrl}${api_v}/competitions/${id}/teams`)
            .catch((error) => {
                return res.status(error.status).json({ message: error.message });
            });
        res.status(200).send(value.data);
    }
}

module.exports = new competitionsActions();