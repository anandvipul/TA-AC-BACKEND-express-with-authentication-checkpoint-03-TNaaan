let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let category = new Schema({
    title: {type: String}
});


module.exports = mongoose.model("Category", category);