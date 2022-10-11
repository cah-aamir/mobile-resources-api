const app = require('express')();
const bodyParser = require('body-parser');
const cors = require("cors");
const server = require('http').createServer(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get("/api/contacts", function (req, res) {
    res.json({ message: "CONTACTS FOR YOU" });
});

app.get("/.well-known/assetlinks.json", function (req, res) {
    res.sendFile('./.well-known/assetlinks.json', { root: __dirname });
});
app.get("/.well-known/apple-app-site-association", function (req, res) {
    res.sendFile('./.well-known/apple-app-site-association', { root: __dirname });
});

server.listen(process.env.PORT || 8080, function () {
    var port = process.env.PORT || 8080
    console.log('App is running on port: ', port);
});
