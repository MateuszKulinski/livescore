require('dotenv').config();

const hostUrl = 'api.football-data.org';
const token = '010ddabbb98f4571bca7d73ab1189cf5';
const api_v = 'v2';

module.exports = {
    port: process.env.PORT,
    dbname: process.env.DATABASE,
    api_v: `/${api_v}`,
    options: {
        host: hostUrl,
        dataType: 'json',
        headers: { 'X-Auth-Token': token },
    },
}