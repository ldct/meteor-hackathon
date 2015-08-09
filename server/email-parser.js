var MailParser = Meteor.npmRequire("mailparser").MailParser,
    mailparser = new MailParser();

var email = Assets.getText('email.eml');
mailparser.on("end", function(mail_object){
    console.log("From:", mail_object.from); //[{address:'sender@example.com',name:'Sender Name'}]
    console.log("Subject:", mail_object.subject); // Hello world!
    console.log("Text body:", mail_object.text); // How are you today?
});

mailparser.write(email);
mailparser.end();


//var emails = new Mongo.Collection;

function label_conversation(email) {
    // body...
}

function truncate_email(email) {
    // body...
}

function drop_images(email) {
    // body...
}

function extract_metadata(email) {
    // body...
}

function output_email(email){
    console.log("Subject:", email.subject);
}
