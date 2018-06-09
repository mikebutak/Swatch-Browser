require('dotenv').config();

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.DATABASE_URL || '127.0.0.1',
        user: process.env.DATABASE_USER,
        insecureAuth: true,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
    },
  });

knex.schema.hasTable('color').then((exists) => {
    if (!exists) {
      return knex.schema.createTable('color', (table) => {
        table.increments('id').primary();
        table.string('hex', 100);
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
      }).then(()=> {
        console.log('created user table!'
      )});
    }
  })
  
  module.exports = knex;