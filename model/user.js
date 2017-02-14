var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var user = new Schema({
    userId: ObjectId,
    name: {type: String, required:true},
    phone: {type: String},
    email: {type: String},
    password: {type: String},
    createdDate: {type: String,default : Date.now()}
},{collection : 'node_users'});

module.exports =  mongoose.model('user', user);
