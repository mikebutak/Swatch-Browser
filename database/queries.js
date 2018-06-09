const db = require('./db.js');

const addColor = (color, cb) => {
    return db.insert({
    hex: color
    })
    .into('color')
    .then((output) => {
        cb(`${color} added!`);
    })
    .catch((err) => {
        if (err) {
            console.log('err msg: ', err);
        }
    })
}

const getColors = (cb, res) => {
    return db.select()
    .from('color')
    .then((colors) => {
        cb(colors, 200, res )
    })
}

module.exports = {
    addColor,
    getColors,
  }