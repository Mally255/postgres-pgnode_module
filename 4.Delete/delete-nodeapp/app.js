// Client setup (alternative-way is in alternatives.txt file).
const {
    Client
} = require('pg');

const client = new Client({
    database: 'postgres',
    host: 'localhost',
    user: 'malcolmkente' // also password if you have it setup
});

// Connect client (alternative-way is in alternatives.txt file).
client.connect();

// Delete value in DB (alternative-way is in alternatives.txt file).
client.query(`delete from hats where id = 8`, (error, result) => {
    console.log(error ? error.stack : `${result.command}: ${result.rowCount}`);
    client.end();
});