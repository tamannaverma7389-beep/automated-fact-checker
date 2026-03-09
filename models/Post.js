const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  text: String,
  cleanedText: String,
  result: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Post", PostSchema);