const colors = require('./colors.json');

const db = require('../queries.js');
const knex = require('../db.js');

const dropDB = () => {
    return new Promise ((resolve, reject) => {
        knex.schema.hasTable('color').then((exists) => {
            if (exists) {
                knex.schema.dropTable('color')
                .then((result) => {
                    console.log(`Success result of dropTable: ${result}.`)
                    resolve();
                })
                .then(() => {
                    return knex.schema.createTable('color', (table) => {
                        table.increments('id').primary();
                        table.string('hex', 100);
                        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
                      })
                })
                .catch((err) => {
                    console.log(`err msg from dropTable: ${err}.`)
                })
            } else { 
                return;
            }
        })
    })
}

const seedDB = () => {
    colors.forEach(color => new Promise((resolve) => {
        db.addColor(color.hex, logResult)
        resolve();
        })
    );
  };

const logResult = (param) => {
    console.log(param);
}

dropDB()
.then(()=> {
    seedDB();
});