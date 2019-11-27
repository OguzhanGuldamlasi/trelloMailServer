const http=require("http")
const mailer = require("nodemailer");
const { Hello } = require("./hello_template");
// const { Thanks } = require("./thanks_template");

const getEmailData = (to, name, template) => {
    let data = null;
    // console.log(to)
    // console.log(name)
    // console.log(template)
            data = {
                from: "oguzhanguldamlasi@gmail.com",
                to:to,
                subject: 'You have a new message from Trello',
                html: `<h1>${name}</h1>`
            };
    return data;
};


const sendEmail =async (to, name, type) => {
    // console.log(to)
    // console.log(name)
    // console.log(type)
    let pool = new http.Agent();
    var smtpConfig = {
        agent:pool,
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'oguzhanguldamlasi@gmail.com',
            pass: 'owljljhoxhmupbvk'
        }
    };
    const smtpTransport = mailer.createTransport(smtpConfig)
    const mail = getEmailData(to, name, type);
    console.log("here");
    smtpTransport.sendMail(mail, function(error, response) {
        if(error) {
            console.log(error)
        } else {
            console.log( " email sent successfully")
        }
        smtpTransport.close();
    })


}

module.exports = { sendEmail };