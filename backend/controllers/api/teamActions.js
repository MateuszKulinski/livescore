const { axiosOptions, api_v, hostUrl } = require('../../config');
const axios = require('axios');

class teamActions {
    //Show one particular team.
    async getTeam(req, res) {
        //id Team
        const id = req.params.id;
        let value = await axios.get(`${hostUrl}${api_v}/teams/${id}`, axiosOptions)
            .catch((error) => {
                return res.status(error.status).json({ message: error.message });
            });
        res.status(200).send(value.data);
    }
    //get one particular area
    async getArea(req, res) {
        //id Team
        const id = req.params.id;
        let value = await axios.get(`${hostUrl}${api_v}/areas/${id}`, axiosOptions)
            .catch((error) => {
                return res.status(error.status).json({ message: error.message });
            });            
        res.status(200).send(value.data);
    }
    //List one particular player.
    async getPlayer(req, res){
        const id = req.params.id;
        let value = await axios.get(`${hostUrl}${api_v}/players/${id}`, axiosOptions)
            .catch((error) => {
                return res.status(error.status).json({ message: error.message });
            });            
        res.status(200).send(value.data);
    }
}

module.exports = new teamActions();