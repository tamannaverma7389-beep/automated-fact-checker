const Fact = require("../models/Fact");

async function verifyFact(cleanedText) {

  const facts = await Fact.find();

  for (let fact of facts) {

    if (cleanedText.includes(fact.claim)) {
      return fact.truth;
    }

  }

  return "Unverified";
}

module.exports = verifyFact;