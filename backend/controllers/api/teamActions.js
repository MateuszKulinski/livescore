const {
    axiosOptions,
    api_v,
    hostUrl
} = require('../../config');
const axios = require('axios');

module.exports = {
    //Show one particular team.
    getTeam: async (req, res) => {
        try {
            const value = await axios.get(`${hostUrl}${api_v}/teams/${id}`, axiosOptions);
            res.status(200).send(value.data);
        } catch (error) {
            res.status(error.response.status).json({
                message: error.response.message
            });
        }

    },
    //get one particular area
    getArea: async (req, res) => {
        try {
            //id Team
            const id = req.params.id;
            const value = await axios.get(`${hostUrl}${api_v}/areas/${id}`, axiosOptions);
            res.status(200).send(value.data);
        } catch (error) {
            res.status(error.response.status).json({
                message: error.response.message
            });
        }
    },
    //List one particular player.
    getPlayer: async (req, res) => {
        try {
            const id = req.params.id;
            const value = await axios.get(`${hostUrl}${api_v}/players/${id}`, axiosOptions);
            res.status(200).send(value.data);
        } catch (error) {
            res.status(error.response.status).json({
                message: error.response.message
            });
        }
    },
}