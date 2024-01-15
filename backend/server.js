import express from "express";

const port = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("index page");
});

app.listen(port, () => console.log("running on 5000"));
