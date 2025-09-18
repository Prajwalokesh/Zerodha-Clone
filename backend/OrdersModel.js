const {model} = require('mongoose');
const OrdersSchema = require('./OrdersSchema');

const OrdersModel =  new model('orders', OrdersSchema);
module.exports = OrdersModel;
