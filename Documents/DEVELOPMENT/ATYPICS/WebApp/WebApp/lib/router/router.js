Router.configure({
    layoutTemplate: 'appLayout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() {
        Meteor.subscribe('images');
    }
});

Router.plugin('dataNotFound', {dataNotFoundTemplate: 'notFound'});

// route that doesn't require signIn
Router.plugin('ensureSignedIn', {
    except: ['atSignIn','atSignUp','atForgotPassword','Home','Timeline','Models','Photographers','Privacy','TermsOfUse']
});

// Use Router.map for use thie.router instead of Route Name
Router.map(function(){
    // HOME ROUTE
    this.route('Home', {
        path: '/',
        name: 'Home'
    });
    // TIMELINE ROUTE
    this.route('Timeline', {
        path: '/timeline',
        name: 'Timeline'
    });
    // POST PAGE ROUTE
    this.route('postPage', {
        path: '/posts/:_id',
        name: 'postPage',
        waitOn: function() {
            return [
                Meteor.subscribe('singlePost', this.params._id),
                Meteor.subscribe('comments', this.params._id)
            ];
        },
        data: function() {
            return Posts.findOne(this.params._id);
        }
    });
    // Models ROUTE
    this.route('Models', {
        path: '/models',
        name: 'Models'
    });
    // Photographers ROUTE
    this.route('Photographers', {
        path: '/photgraphers',
        name: 'Photographers'
    });
    // CreateProfil ROUTE
    this.route('ChooseProfile', {
        path: '/chooseProfile',
        name: 'ChooseProfile'
    });
    // CreatePhotographer ROUTE
    this.route('UpdatePhotographer', {
        path: '/updatePhotographer',
        name: 'UpdatePhotographer'
    });
    // CreateModel ROUTE
    this.route('CreateModel', {
        path: '/createModel',
        name: 'CreateModel'
    });
    // ProfileNotFound ROUTE
    this.route('ProfileNotFound', {
        path: '/profileNotFound',
        name: 'ProfileNotFound'
    });
    // PhotographerProfile ROUTE
    this.route('PhotographerProfile', {
        path: '/profiles/photographer/:_id',
        name: 'PhotographerProfile',
        waitOn: function() {
            if (Meteor.users.find({profileType: "photographer"})) {
                return Meteor.subscribe('photographers', this.params._id);
            }else{
                Router.go('ProfileNotFound');
            }
        },
        data: function() {
            return Photographers.findOne(this.params._id);
        }
    });
    // ModelsProfile ROUTE
    this.route('ModelProfile', {
        path: '/profiles/models/:_id',
        name: 'ModelProfile'
        // ,
        // waitOn: function() {
        //     if (Meteor.users.find({profileType: 'models'})) {
        //         return Meteor.subscribe('models', this.find());
        //     }else{
        //         Router.go('ProfileNotFound');
        //     }
        // },
        // data: function() {
        //     return Models.findOne(this.params._id);
        // }
    });
    // CompanyProfile ROUTE
    this.route('CompanyProfile', {
        path: '/profiles/companies/:_id',
        name: 'CompanyProfile'
        // ,
        // waitOn: function() {
        //     if (Meteor.users.find({profileType: "company"})) {
        //         return Meteor.subscribe('companies', this.find());
        //     }else{
        //         Router.go('ProfileNotFound');
        //     }
        // },
        // data: function() {
        //     return Companies.findOne(this.params._id);
        // }
    });
    // PhotographerProfile ROUTE
    this.route('VisitorProfile', {
        path: '/profiles/visitor/:_id',
        name: 'VisitorProfile'
        // ,
        // waitOn: function() {
        //     if (Meteor.users.find({profileType: "photographer"})) {
        //         return Meteor.subscribe('photographers', this.find());
        //     }else{
        //         Router.go('ProfileNotFound');
        //     }
        // },
        // data: function() {
        //     return Photographers.findOne(this.params._id);
        // }
    });
    // Privacy ROUTE
    this.route('Privacy', {
        path: '/privacy',
        name: 'Privacy'
    });
    // TermsOfUse ROUTE
    this.route('TermsOfUse', {
        path: '/termsOfUse',
        name: 'TermsOfUse'
    });
});





// PROFILE ROUTE
// this.route('Profile', {
//     path: '/profiles/:_id',
//     name: 'Profile',
//     waitOn: function() {
//         if (Meteor.users.find({profileType: "photographer"})) {
//             return Meteor.subscribe('photographers', this.find());
//         }else if (Meteor.users.find({profileType: "model"})) {
//             return Meteor.subscribe('models', this.find());
//         }else if (Meteor.users.find({profileType: "company"})) {
//             return Meteor.subscribe('company', this.find());
//         }else if (Meteor.users.find({profileType: "visitor"}) || Meteor.users.find({profileType: "null"})) {
//             return false;
//         }else{
//             return false;
//         }
//     },
//     // data: function() {
//     //     var hasMore = this.posts().count() === this.postsLimit();
//     //     var nextPath = this.route.path({postsLimit: this.postsLimit() + this.increment});
//     //     return {
//     //         posts: this.posts(),
//     //         nextPath: hasMore ? nextPath : null
//     //     };
//     // }
// });
