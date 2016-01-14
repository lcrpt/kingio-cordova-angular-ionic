Template.post.helpers({
    postAuthor: function() {
        // We use this helper inside the {{#each posts}} loop, so the context
        // will be a post object. Thus, we can use this.authorId.
        return Meteor.users.findOne(this.authorId);
    },
    postedTime: function(){
        return moment(this.createdAt).fromNow();
    }
});
