var mysql = require('mysql');

var connection = mysql.createPool({
    // Local
    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'botijon'

    // Hostinger
    // host: 'sql31.hostinger.com.br',
    // user: 'u834126065_botij',
    // password: 'BotijOnAppKey123',
    // database: 'u834126065_botij'

    // 000Webhost
    host: 'databases-auth.000webhost.com',
    user: 'id2500549_botijonadmin',
    password: 'BotijOnAppKey123',
    database: 'id2500549_botijondb'
});

module.exports = connection;