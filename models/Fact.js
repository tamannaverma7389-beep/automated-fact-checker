const mongoose = require("mongoose");

const FactSchema = new mongoose.Schema({
  claim: String,
  truth: String,
  source: String
});

module.exports = mongoose.model("Fact", FactSchema);