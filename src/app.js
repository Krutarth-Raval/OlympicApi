require("dotenv").config();

const express = require("express");
const connectDB= require("../src/db/conn");
const MensRanking = require("../src/models/mens");
const router = require("../src/routers/men")

const app = express();
const port = process.env.PORT || 3000;
 connectDB();
app.use(express.json());
app.use(cors()); 

app.use(router);

app.listen(port, () => {
  console.log(`connection is live at port no. ${port}`);
});
