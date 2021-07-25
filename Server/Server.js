const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

//data imports
const phones = require('./data/phoneData.js')
const laptops = require('./data/laptopData.js')
const tablets = require('./data/tabletData.js')

app.listen(port, () => console.log(`Listening on port ${port}`));

//get requests
app.get("/mobile", (req, res) => {
    res.send(phones.phones);
});
app.get("/laptop", (req, res) => {
    res.send(laptops.laptops);
});
app.get("/tablet", (req, res) => {
    res.send(tablets.tablets);
});
//files share
app.use('/phones',express.static('phones'))
app.use('/laptops',express.static('laptops'))
app.use('/tablets',express.static('tablets'))
