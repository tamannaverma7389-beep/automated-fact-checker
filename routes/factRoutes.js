const express = require("express");
const router = express.Router();
const { checkFact } = require("../controllers/factController");

router.post("/check", checkFact);

module.exports = router;