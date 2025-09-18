const {model} = require('mongoose');
const HoldingsSchema = require('./HoldingsSchema');

const HoldingsModel =  new model('holdings', HoldingsSchema);
module.exports = HoldingsModel;
