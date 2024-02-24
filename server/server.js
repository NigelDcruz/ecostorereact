const express = require("express");
const db = require("./config/connection");
const funcs = require("./middleware/errorMiddleware");
const PORT = 5000;
const app = express();
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("index");
});

//cookie parser middleware will allow me to access req.cookies.jwt in the authMiddleware
app.use(cookieParser());
app.use(funcs.notFound);
app.use(funcs.errorHandler);

app.use(userRoutes);
app.use(productRoutes);
app.use(orderRoutes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`running on port ${PORT}!`);
  });
});
