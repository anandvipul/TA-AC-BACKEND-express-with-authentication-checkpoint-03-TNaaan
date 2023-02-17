let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let Category = require("Category");

let expense = new Schema({
    expenseAmount: {type: Number},
    category: {type: Schema.ObjectId, ref: Category}
});

module.exports = mongoose.module("Expense", expense);