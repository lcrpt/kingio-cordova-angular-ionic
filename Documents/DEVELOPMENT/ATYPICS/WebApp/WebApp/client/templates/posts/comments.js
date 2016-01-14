Template.Comments.helpers({
    comments: function() {
        return Comments.find({postId: this._id});
    },
    // commentAuthor: function() {
    //     // We use this helper inside the {{#each posts}} loop, so the context
    //     // will be a post object. Thus, we can use this.authorId.
    //     return Meteor.users.findOne(this.authorId);
    // },
	commentedTime: function(){
        return moment(this.submitted).fromNow();
    }
});

Template.Comments.events({
    'submit form': function(e, template){
        e.preventDefault();
        var $commentText = $(e.target).find('[name=commentText]');
        var comment = {
            commentText: $commentText.val(),
            postId: template.data._id
        };

        var errors = {};
        if(!comment.commentText){
            errors.commentText = "Please write a comment";
        }

        Meteor.call('commentInsert', comment, function(error, commentId){
            if (error){
                sAlert.error('An error occured with your Comment ! Please try again later.', {});
            }else{
                $commentText.val('');
                sAlert.success('Your Comment has been successfully added !', {});
            }
        });
    }
});
