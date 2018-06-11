const knex = require('knex');

exports.up = function(knex, Promise) {
    return Promise.all([
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
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('color')
    ]);
};
