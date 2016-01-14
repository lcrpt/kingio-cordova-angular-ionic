Meteor.startup(function() {
    Meteor.Mailgun.config({
        username: 'postmaster@sandboxc3e09d5ef09f401da8b54f3bb68eaa7f.mailgun.org',
        password: '693cfc8ed68656e36c2f5c185721ba16'
    });

    Meteor.methods({
        'sendContactEmail': function(name, email, message) {
            this.unblock();

            Meteor.Mailgun.send({
                to: 'leolassence@gmail.com',
                from: name + ' <' + email + '>',
                subject: 'Welcome to Atypics',
                text: message,
                html: Handlebars.templates['contactEmail']({siteURL: Meteor.absoluteUrl(), fromName: name, fromEmail: email, message: message})
            });
        }
    });
});
