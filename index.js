const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});
const { sendEmail } = require('./mail');


app.post("", (req, res) => {

    // console.log(req.body);
    console.log(req.body.message);
    console.log(req.body.mail);
    sendEmail(req.body.mail, req.body.message, "hello")

})


app.listen(5000,  () => {
    console.log( "Server Running at 5000 ");
})