const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const phones = {
    phones: [
        {
            id: "1",
            category: "mobile",
            brand: "apple",
            model: "iPhone",
            image:"/phones/iphone.jpg"
        },
        {
            id: "2",
            category: "mobile",
            brand: "samsung",
            model: "S10",
        },
    ],
};

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/mobile", (req, res) => {
    res.send(phones);
});
app.use('/phones',express.static('phones'))
