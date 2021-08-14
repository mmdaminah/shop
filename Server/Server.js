const express = require("express");
var jwt = require("jsonwebtoken");
const TOKEN_SECRET = require("crypto").randomBytes(64).toString("hex");
const app = express();
const fs = require("fs");
const port = process.env.PORT || 5000;
const bcrypt = require("bcrypt");
const saltRounds = 10;
const users = [];
myPlaintextPassword = "1234";
bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
    // Store hash in your password DB.
    users.push({ email: "en.mmdamin@gmail.com", password: hash });
});
//multer middleware
const multer = require("multer");
const filteStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./phones");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: filteStorageEngine });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//data imports
const phones = require("./data/phoneData.js");
const laptops = require("./data/laptopData.js");
const tablets = require("./data/tabletData.js");

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
//post requests
app.post("/mobile", upload.single("image"), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    const newProduct = { ...req.body, image: `/phones/${req.file.filename}` };
    phones.phones.products.push(newProduct);
    console.log(phones.phones.products);
    res.status(200).send("successed");
});
app.post("/mobile:id", (req, res) => {
    const item = phones.phones.products.find(
        (item) => item.id === req.params.id
    );
    phones.phones.products = phones.phones.products.filter(
        (item) => item.id !== req.params.id
    );
    //deletes file
    try {
        fs.unlinkSync(`.${item?.image}`);
        //file removed
    } catch (err) {
        console.error(err);
    }
    res.status(200).send("successed");
});
app.post("/editmobile:id", upload.single("image"), (req, res) => {
    const id = req.params.id;
    phones.phones.products = phones.phones.products.filter(
        (item) => item.id !== id
    );
    phones.phones.products.push(req.body);
    res.status(200).send("successed");
});

function generateAccessToken(email) {
    return jwt.sign(email, TOKEN_SECRET, { expiresIn: "10s" });
}
app.post("/register", (req, res) => {
    const body = req.body;
    const user = users.find((item) => item.email === body.email);
    if(user){
        bcrypt.compare(body.password, user.password, function (err, result) {
            if(result){
                res.status(200).send("user already exists")
            }
        })
    }
    else{
        bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
            // Store hash in your password DB.
            users.push({ email: req.body.email, password: hash });
        });
        res.status(200).send("successed");
    }
});

app.post("/login", (req, res) => {
    const body = req.body;
    const user = users.find((item) => item.email === body.email);
    bcrypt.compare(body.password, user.password, function (err, result) {
        const token = generateAccessToken({ email: req.body.email });
        const refreshToken = jwt.sign({ email: body.email }, TOKEN_SECRET, { expiresIn: "300s"})
        res.json({accessToken:token,refreshToken})
        // res.status(200).send("successed");
    });
});
//files share
app.use("/phones", express.static("phones"));
app.use("/laptops", express.static("laptops"));
app.use("/tablets", express.static("tablets"));
