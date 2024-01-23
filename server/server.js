const express = require("express");
const db = require("./config/connection");
const productRoute = require("./routes/productRoutes");

const PORT = 5000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});
app.use("/products", productRoute);
// app.use("/users", getUsersRoutes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`running on port ${PORT}!`);
  });
});
