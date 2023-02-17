let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let Expense = require("Expense");

let user = new Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String},
    age: {type: Number},
    phone: {type: Number},
    country: {type: String},
    expense: {type: [Schema.ObjectId], ref: Expense}
}, {timestamps: true});



module.exports = mongoose.model("User", user);