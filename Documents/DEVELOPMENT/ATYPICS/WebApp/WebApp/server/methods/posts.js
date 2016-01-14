Meteor.methods({
    insertPosts: function(doc) {
        // console.log(doc);
        // check(doc);
        Posts.insert(doc);
    }
});
