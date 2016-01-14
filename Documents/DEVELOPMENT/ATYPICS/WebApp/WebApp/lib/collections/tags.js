Tags = new Mongo.Collection('tags');

Tags.attachSchema(new SimpleSchema({
	tags: {
		type: String,
		optional: true,
		label: 'Tags',
		max: 70,
		min: 1
	},
	createdAt: {
		type: Date,
		label: 'CreatedAt',
		autoValue: function(){
			return new Date()
		},
		autoform: {
			type: 'hidden'
		}
	}
}));


Posts.allow({
	insert: function (doc) {
		return true;
	},
	update: function (doc, fields, modifier) {
		return true;
	},
	remove: function (doc) {
		return true;
	}
});
