var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  title: String,
  checked: Boolean
});

var Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
