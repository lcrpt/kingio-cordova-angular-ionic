Template.PostsForm.helpers({
	optsGoogleplace: function() {
		return {
			type: 'googleUI',
			stopTimeoutOnKeyup: false
			//,
			// googleOptions: {
			//   componentRestrictions: { country:'us' }
			// }
		}
	}
});

AutoForm.hooks({
	insertPostsForm: {
        onSuccess: function() {
            sAlert.success('Your Post has been successfully added !', {});
        },
        onError: function() {
            sAlert.error('An error occured with your Post ! Please try again later.', {});
        }
    }
});
