/* eslint-disable no-console */
/* Read from the connection established in the config file under db folder */
const pool = require("../../db/create-config.js");

/*
Both queries below achieve the same thing.
- The first one uses a Callback function.
- The second one uses Promises */

// Callback
/* pool.query(
  `update hats set height = $1 where name = $2`,
  process.argv.splice(2),
  (error, result) => {
    console.log(error ? error.stack : `${result.command}: ${result.rowCount}`);
  }
); */

// Promise
pool
  .query(`update hats set height = $1 where name = $2`, process.argv.splice(2))
  .then(results => console.log(`${results.command}: ${results.rowCount}`))
  .catch(error => console.error(error.stack));

pool.end();
