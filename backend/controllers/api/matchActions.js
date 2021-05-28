const { options } = require('../../config')
const https = require('https');

class matchActions {
    async getMatches(req, res) {
        options.path = '/v2/competitions/PL/matches?matchday=11';
        let matches = {};
        try {
            https.get(options, resHttps => {
                resHttps.on('data', data => {
                    matches += data;
                })
                resHttps.on('end', () => {
                    res.status(200).send(matches);
                    console.log(matches);
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