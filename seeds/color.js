const colorData = require('../database/seed/colors');

exports.seed = function(knex, Promise) {
  return knex('color').del()
  .then(() => {
    return knex('color').insert(colorData)
  });
};
