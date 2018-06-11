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

const addColorWithVerify = (hex, cb, res) => {
    return db.insert({
        hex: hex
    })
    .into('color')
    .then((data) => {
        if( getIdOfColor(hex) ) {
            cb( `${data}, ${hex} added to db`, 200, res)
        }
    })
    .catch((err) => {
        cb(`Error adding color: ${err}`, 400, res);
    })
}

const getIdOfColor = (hex) => {
    return db('color')
    .where({
        hex: hex
    })
    .select('id')
    .then((result) => {
        console.log('this color found in db: ', result)
        if ( result ) {
            return result;
        } else {
            return `error finding ${hex}'s id in db`;
        }
    })
    .catch((err) => {
        if (err) {
            console.log(`Error retrieving ${hex} from db:`, err);
        }
    })
}

module.exports = {
    addColor,
    getColors,
    addColorWithVerify
  }