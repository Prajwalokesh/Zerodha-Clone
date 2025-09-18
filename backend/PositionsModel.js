const {model} = require('mongoose');

const PositionsSchema = require('./PositionsSchema');

const PositionsModel =  new model('positions', PositionsSchema);
module.exports = PositionsModel;