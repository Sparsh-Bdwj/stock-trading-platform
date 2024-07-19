require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModels } = require("./models/PositionsModel");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// future error prob

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is listing to port ${PORT}`);
});

mongoose
  .connect(uri, {})
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.log(err));

app.use(
  cors({
    origin: ["https://stalwart-belekoy-d5213a.netlify.app/"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.json());
app.use("/", authRoute);

// Holding dummy data
/* 
app.get("/addHoldings", async (req, res) => {
  const tempHoldings = holdings;
  // console.log(tempHoldings);
  tempHoldings.forEach((item) => {
    let newHolding = new HoldingsModel({
      name: item.name,
      qty: item.qty,
      avg: item.avg,
      price: item.price,
      net: item.net,
      day: item.day,
    });
    newHolding.save();
  });
  res.send("data uploded");
});
*/

// Positions dummy data
/* 
app.get("/addPositions", async (req, res) => {
  const tempPostings = positions;
  tempPostings.forEach((item) => {
    let newPosition = new PositionsModels({
      product: item.product,
      name: item.name,
      qty: item.qty,
      avg: item.avg,
      price: item.price,
      net: item.net,
      day: item.day,
      isLoss: item.isLoss,
    });
    newPosition.save();
  });
  res.send("data stored");
});
*/

// fetching data from data base
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});
app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModels.find({});
  res.json(allPositions);
});
