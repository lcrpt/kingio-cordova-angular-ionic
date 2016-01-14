Template.postsList.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('postsDatas');
	});
});

Template.postsList.helpers({
    postsIndex: function() {
        return PostsIndex;
    }
});
