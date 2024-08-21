const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const Test = mongoose.model("Test", testSchema);

module.exports = Test;