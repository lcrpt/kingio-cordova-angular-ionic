Photographers = new Mongo.Collection('photographers');

Schema = {};

Photographers.attachSchema(new SimpleSchema({
	userId: {
		type: String,
		optional: false,
		label: 'userId'
	},
	gender: {
		type: String,
		optional: true,
		autoform: {
			type: 'select',
	        options: function () {
	          	return [
	            	{label: 'Male', value: 'male'},
	            	{label: 'Female', value: 'female'}
	          	];
	        }
		}
	},
	city: {
		type: String,
		optional: true,
		label: 'City',
		max: 70,
		min: 1
	},
	country: {
		type: String,
		optional: true,
		label: 'Country',
		max: 70,
		min: 1
	},
	phone: {
		type: String,
		optional: true,
		label: 'Phone Number',
		max: 70,
		min: 1
	},
	birthdate: {
		type: Date,
		optional: true,
		label: 'birthdate',
		max: 70,
		min: 1
	},
	material: {
		type: Date,
		optional: true,
		label: 'material',
		max: 70,
		min: 1
	},
	studio: {
		type: Date,
		optional: true,
		label: 'studio',
		max: 70,
		min: 1
	},
	experiences: {
		type: Date,
		optional: true,
		label: 'experiences',
		max: 70,
		min: 1
	},
	professionalSituation: {
		type: Date,
		optional: true,
		label: 'professionalSituation',
		max: 70,
		min: 1
	},
	school: {
		type: Date,
		optional: true,
		label: 'school',
		max: 70,
		min: 1
	},
	nationality: {
		type: String,
		optional: true,
		label: 'nationality',
		max: 70,
		min: 1
	},
	otherSpecificity: {
		type: String,
		optional: true,
		label: 'Skin',
		max: 70,
		min: 1
	},
	personnalDescr: {
		type: String,
		optional: true,
		label: 'personnalDescr',
		max: 70,
		min: 1
	},
	influences: {
		type: String,
		optional: true,
		label: 'influences',
		max: 70,
		min: 1
	},
	hobbies: {
		type: String,
		optional: true,
		label: 'hobbies',
		max: 70,
		min: 1
	},
	profilTags: {
		type: [Schema.Tags],
		optional: true
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
