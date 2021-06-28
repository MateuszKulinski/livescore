require('dotenv').config();

const hostUrl = 'https://api.football-data.org';
const token = '010ddabbb98f4571bca7d73ab1189cf5';
const api_v = 'v2';
const salt = 'z5ghNsa4L5E84as';

module.exports = {
    port: process.env.PORT,
    dbname: process.env.DATABASE,
    api_v: `/${api_v}`,
    hostUrl: hostUrl,
    salt: salt,
    axiosOptions: {
        headers: {
            'X-Auth-Token': token,
        }
    }
}