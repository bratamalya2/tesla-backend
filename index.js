const express = require("express");
const axios = require("axios");
const cors = require("cors");
const helmet = require("helmet");

const urls = require("./urls");

const app = express();

app.use(cors());
app.use(helmet());

app.get("/getAll", async (req, res) => {
  try {
    const x = await axios.get(urls.GET_ALL_ROCKETS);
    res.json(x.data);
  } catch (err) {
    console.log(err);
    res.json({
      data: [],
    });
  }
});

app.get("/getOne/:id", async (req, res) => {
  try {
    const id = req.params["id"];
    const x = await axios.get(`${urls.GET_ALL_ROCKETS}/${id}`);
    res.json(x.data);
  } catch (err) {
    console.log(err);
    res.json({
      data: {},
    });
  }
});

const port = 3005;

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
