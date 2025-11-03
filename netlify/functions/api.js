const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  try {
    const top = encodeURIComponent(req.query.top || "This is top Text!");
    const bottom = encodeURIComponent(req.query.bottom || "This is bottom Text!");
    const template = req.query.template || "doge";

    let memeURL;
    if (template === "random") {
      memeURL = `https://api.memegen.link/images/random/${top}/${bottom}.png`;
    } else {
      memeURL = `https://api.memegen.link/images/${template}/${top}/${bottom}.png`;
    }

    res.json({ url: memeURL });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
