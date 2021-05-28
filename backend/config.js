require('dotenv').config();

module.exports = {
    port: process.env.PORT,
    dbname: process.env.DATABASE,
    options: {
        host: 'api.football-data.org',
        dataType: 'json',
        headers: { 'X-Auth-Token': '010ddabbb98f4571bca7d73ab1189cf5' },
    },
}