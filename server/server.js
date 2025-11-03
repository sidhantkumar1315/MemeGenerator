const express = require("express");
const path = require("path");

const app = express();

const PORT = 8000;

app.use(express.static(path.join(__dirname, "../client")));

app.get("/api/meme", (req, res) => {
    try{
    const top = encodeURIComponent(req.query.top || "This is top Text!")
    const bottom = encodeURIComponent(req.query.bottom || "This is bottom Text!")
    const template = req.query.template || "doge";

    let memeURl;
    if(template === "random"){
        memeURl = `https://api.memegen.link/images/random/${top}/${bottom}.png`;
    }
    else{
        memeURl = `https://api.memegen.link/images/${template}/${top}/${bottom}.png`;
    }

    res.json({url: memeURl})
}
catch(err){
    console.error(err)
    res.status(500).json({error: "Server error"})
    alert("Unable to make the meme! :(")
}
})

app.listen(PORT, () => {
    console.log(`Server listening at Port ${PORT}`)
})

module.exports = app;
