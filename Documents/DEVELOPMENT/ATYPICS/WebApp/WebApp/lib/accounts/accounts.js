AccountsTemplates.configure({
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: true,
    lowercaseUsername: false,
    focusFirstInput: true,
    showAddRemoveServices: true,
    showForgotPasswordLink: true,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: true,
    continuousValidation: true,
    negativeFeedback: true,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,
    privacyUrl: 'Privacy',
    termsUrl: 'TermsOfUse',
    redirectTimeout: 0,
    texts: {
        button: {
            signUp: 'Create my Profil'
        },
        socialSignUp: 'Create my Profil',
        socialIcons: {
            'meteor-developer': 'fa fa-rocket'
        },
        title: {
            forgotPwd: 'Recover Your Password'
        }
    }
});
//
AccountsTemplates.configureRoute('signUp', {
    layoutTemplate: 'appLayout',
    redirect: function() {
        var user;
        user = Meteor.user();
        if (user) {
            Router.go('/chooseProfile');
        }
    }
});
//
AccountsTemplates.configureRoute('signIn', {
    layoutTemplate: 'appLayout',
    redirect: function() {
        var user;
        user = Meteor.user();
        if (user) {
            Router.go('/timeline');
        }
    }
});
//
AccountsTemplates.configureRoute('ensureSignedIn');
//
AccountsTemplates.addFields([
    {
        _id: 'firstName',
        type: 'text',
        displayName: 'First Name',
        required: true,
        minLength: 1
    }, {
        _id: 'lastName',
        type: 'text',
        displayName: 'Last Name',
        required: true,
        minLength: 1
    }
]);
//
if (Meteor.isServer) {
    Accounts.onCreateUser(function(options, user) {
        if (!options.profile) {
            options.profile = {};
        }
        options.profile.profileType = 'NULL';
        options.profile.profilePicture = 'defaultProfilePicture.jpg';
        if (options.profile) {
            user.profile = options.profile;
        }
        return user;
    });
    Meteor.startup(function() {
        ServiceConfiguration.configurations.update({
            'service': 'facebook'
        }, {
            $set: {
                'appId': Meteor.settings.private.meteorAccounts.facebook.appId,
                'secret': Meteor.settings.private.meteorAccounts.facebook.secret
            }
        }, {
            upsert: true
        });
        ServiceConfiguration.configurations.update({
            'service': 'google'
        }, {
            $set: {
                'clientId': Meteor.settings.private.meteorAccounts.google.clientId,
                'secret': Meteor.settings.private.meteorAccounts.google.secret
            }
        }, {
            upsert: true
        });
        ServiceConfiguration.configurations.update({
            'service': 'twitter'
        }, {
            $set: {
                'clientId': Meteor.settings.private.meteorAccounts.twitter.clientId,
                'secret': Meteor.settings.private.meteorAccounts.twitter.secret
            }
        }, {
            upsert: true
        });
        ServiceConfiguration.configurations.update({
            'service': 'instagram'
        }, {
            $set: {
                'clientId': Meteor.settings.private.meteorAccounts.instagram.clientId,
                'secret': Meteor.settings.private.meteorAccounts.instagram.secret
            }
        }, {
            upsert: true
        });
    });
}
