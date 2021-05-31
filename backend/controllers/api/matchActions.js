const { axiosOptions, api_v, hostUrl } = require('../../config');
const axios = require('axios');

module.export = {
//List of live matches
    getLiveMatches: async(req, res) =>  {
        //id Team
        let value = await axios.get(`${hostUrl}${api_v}/matches?status=LIVE`, axiosOptions)
            .catch((error) => {
                return res.status(error.status).json({ message: error.message });
            });
        res.status(200).send(value.data);
    },
    //List of today matches
    getLiveMatches: async(req, res) =>  {
        //id Team
        try{
        const formatYmd = date => date.toISOString().slice(0, 10);
        let date = formatYmd(new Date());
        let value = await axios.get(`${hostUrl}${api_v}/matches?dataFrom=${date}&dataTo=${date}`, axiosOptions);        
        res.status(200).send(value.data);
        }catch(error){
            return res.status(error.status).json({ message: error.message });
        }
    },
    //Show one particular match.
    getSingleMatch: async(req, res) => {
        //id match
        const id = req.params.id;
        let value = await axios.get(`${hostUrl}${api_v}/matches/${id}`, axiosOptions)
            .catch((error) => {
                return res.status(error.status).json({ message: error.message });
            }); 
        res.status(200).send(value.data);
    },
    //Show all matches for a particular player.
    getSinglePlayerMatches: async(req, res) => {
        //id match
        const id = req.params.id;
        let value = await axios.get(`${hostUrl}${api_v}/players/${id}/matches`, axiosOptions)
            .catch((error) => {
                return res.status(error.status).json({ message: error.message });
            }); 
        res.status(200).send(value.data);
    },
}