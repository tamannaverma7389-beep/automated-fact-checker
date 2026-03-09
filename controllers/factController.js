const optimizeText = require("../services/optimizer");
const verifyFact = require("../services/verifier");
const Post = require("../models/Post");

exports.checkFact = async (req, res) => {

  const { text } = req.body;

  const cleanedText = optimizeText(text);

  const result = await verifyFact(cleanedText);

  await Post.create({
    text,
    cleanedText,
    result
  });

  res.json({ result });

};