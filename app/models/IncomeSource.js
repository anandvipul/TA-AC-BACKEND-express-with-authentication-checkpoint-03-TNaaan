let mongose = reqire("mongoose");
let Schema = mongoose.Schema;
let Category = require("Category");

let incomeSource = new Schema({
    income: {type: Number},
    category: {type: Schema.ObjectId, ref: Category}
});

module.exports = mongoose.model("IncomeSource", incomeSource);