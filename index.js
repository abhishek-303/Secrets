
//The password is ILoveProgramming

import express from "express";
const app = express();
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import bodyParser from "body-parser";
var flag = false;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});


app.use(bodyParser.urlencoded({ extended: true }));

function passwordCheck(req, res, next) {
    const password = req.body["password"];
    if (password === "hello") {
        flag = true;
    }
    next();
}

app.use(passwordCheck);

app.post("/check", (req, res) => {
    if (flag) {
        res.sendFile(__dirname + "/public/secret.html")
    }
    else {
           res.sendFile(__dirname + "/public/index.html");
    }
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`your server is running on the port ${PORT}`);
});