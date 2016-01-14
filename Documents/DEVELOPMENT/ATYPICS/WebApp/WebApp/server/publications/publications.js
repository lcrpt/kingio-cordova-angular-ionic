// USERDATAS
Meteor.publish("userData", function () {
    if (this.userId) {
        return Meteor.users.find({_id: this.userId}, {fields: {'other': 1, 'things': 1}});
    } else {
        this.ready();
    }
});

// IMAGES
Meteor.publish('images', function() {
    return Images.find();
});

// PHOTOGRAPHERS
Meteor.publish('photographers', function() {
    return Photographers.find();
});

// MODELS
Meteor.publish('models', function() {
    return Models.find();
});


Meteor.publish('singlePost', function(id) {
    check(id, String);
    return Posts.find(id);
});


Meteor.publish('comments', function(postId) {
    check(postId, String);
    return Comments.find({postId: postId});
});


// ALL POSTS AND DATAS
Meteor.publishComposite('postsDatas', {
    find: function() {
        return Posts.find({}, { sort: { createdAt: -1 }});
    },
    children: [
        {
            find: function(post) {
                // Find post author. Even though we only want to return
                // one record here, we use "find" instead of "findOne"
                // since this function should return a cursor.
                return Meteor.users.find(
                    { _id: post.authorId },
                    { limit: 1, fields: { profile: 1 } });
                }
            },
            {
                find: function(post) {
                    // Find post comments
                    return Comments.find(
                        { postId: post._id },
                        { sort: { score: -1 }, limit: 2 });
                    },
                    children: [
                        {
                            find: function(comment, post) {
                                // Find user that authored comment.
                                return Meteor.users.find(
                                    { _id: comment.authorId },
                                    { limit: 1, fields: { profile: 1 } });
                                }
                            }
                        ]
                    }
                ]
            });








            //
