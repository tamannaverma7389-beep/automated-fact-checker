const express = require("express");
const connectDB = require("./config/db");

const factRoutes = require("./routes/factRoutes");

const app = express();

connectDB();

app.use(express.json());
app.use(express.static("public"));

app.use("/api", factRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});