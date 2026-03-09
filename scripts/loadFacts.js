const mongoose = require("mongoose");
const Fact = require("../models/Fact");

mongoose.connect("mongodb://127.0.0.1:27017/factchecker");

const facts = [

{
claim:"drinking hot water cures covid",
truth:"False",
source:"WHO"
},

{
claim:"5g spreads coronavirus",
truth:"False",
source:"WHO"
},

{
claim:"covid vaccine causes infertility",
truth:"False",
source:"CDC"
},

{
claim:"earth is flat",
truth:"False",
source:"NASA"
},

{
claim:"vaccines save lives",
truth:"True",
source:"WHO"
}

];

async function loadFacts(){

await Fact.deleteMany({});

await Fact.insertMany(facts);

console.log("Facts Loaded");

mongoose.connection.close();

}

loadFacts();