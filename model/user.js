var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var user = new Schema({
    userId: ObjectId,
    firstName: {type: String, required:true},
    lastName: {type: String, required:true},
    phone: {type: String},
    email: {type: String,required:true},
    password: {type: String,required:true},
    createdDate: {type: String,default : Date.now()}
},{collection : 'node_users'});

module.exports =  mongoose.model('user', user);
