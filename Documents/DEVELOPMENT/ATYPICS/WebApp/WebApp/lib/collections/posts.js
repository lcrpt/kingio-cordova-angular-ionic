// CREATE COLLECTION POSTS
Posts = new Mongo.Collection('posts');

// SEARCH ENGINE
PostsIndex = new EasySearch.Index({
	collection: Posts,
	fields: ['searchProfileType','shootingType','description', 'tags'],
	engine: new EasySearch.Minimongo()
});

// POSTS SCHEMA
Posts.attachSchema(new SimpleSchema({
	searchProfileType: {
		type: String,
		optional: false,
		label: 'I\'m looking for a Photographe or a Model',
		autoform: {
			type: 'select',
			options: function () {
				return [
					{label: 'Model', value: 'Model'},
					{label: 'Photographers', value: 'Photographers'}
				];
			}
		}
	},
	shootingType: {
		type: String,
		optional: false,
		label: 'Shooting Type',
		max: 30,
		min: 2
	},
	// DESCRIPTION
	description: {
		type: String,
		optional: false,
		label: 'Description',
		max: 400,
		min: 15
	},
	// ADRESSE
	// address: {
	// 	type: AddressSchema,
	// 	label: 'Location',
	// 	optional: true
	// },
	// TAGS
	tags: {
		type: [Schema.Tags],
		optional: true
	},
	// UPLOAD ONE IMAGE
	// picture: {
	// 	type: String,
	// 	optional: true,
	// 	autoform: {
	// 		afFieldInput: {
	// 			type: 'fileUpload',
	// 			collection: 'Images',
	// 			label: 'Choose file',
	// 			accept: 'image/*',
	// 			label: 'Choose a Picture',
	// 			uploadProgressTemplate: 'loading',
	// 			// previewTemplate: 'myFilePreview',
	// 			// selectFileBtnTemplate: 'mySelectFileBtn',
	// 			// removeFileBtnTemplate: 'myRemoveFileBtn'
	// 		}
	// 	}
	// },
	// USER ID
	commentsCount: {
		type: Number,
		label: 'CommentsCount',
		optional: false,
		autoValue: function(){
			return 0
		},
		autoform: {
			type: 'hidden'
		}
	},
	// USER ID
	authorId: {
		type: String,
		label: 'AuthorId',
		optional: false,
		autoValue: function(){
			return this.userId
		},
		autoform: {
			type: 'hidden'
		}
	},
	// POSTS CREATED AT
	createdAt: {
		type: Date,
		label: 'CreatedAt',
		optional: false,
		autoValue: function(){
			if (this.isIsert) {
				return new Date()
			}
		},
		autoform: {
			type: 'hidden'
		}
	}
	// updatedAt: {
	// 	type: Date,
	// 	autoValue: function() {
	// 		if (this.isUpdate) {
	// 			return new Date();
	// 		}
	// 	},
	// 	denyInsert: true,
	// 	optional: true
	// }
}));

// ALLOW POSTS RULES
Posts.allow({
	insert: function (userId, doc) {
		// the user must be logged in, and the document must be owned by the user
		return (userId && doc.owner === userId);
	},
	update: function (userId, doc, fields, modifier) {
		// can only change your own documents
		return doc.owner === userId;
	},
	remove: function (userId, doc) {
		// can only remove your own documents
		return doc.owner === userId;
	},
	fetch: ['owner']
});

// DENY POSTS RULES
Posts.deny({
	update: function (userId, doc, fields, modifier) {
		// can't change owners
		return _.contains(fields, 'owner');
	},
	remove: function (userId, doc) {
		// can't remove locked documents
		return doc.locked;
	},
	fetch: ['locked'] // no need to fetch 'owner'
});
