Meteor.methods({
    //
    initPhotographerProfile: function(photographerDatas) {
        check(Meteor.userId(), String);
        check(photographerDatas, {
            profileType: String,
            initProfileCollection: Boolean,
            initCreationDate: Date,
            creationStep: Number
        });
        // update he profileType to photographer
        Meteor.users.update({ _id: Meteor.userId() }, { $set: {'profile.profileType': photographerDatas.profileType}});
        // init additionnal default datas by the way of _.extend object (underscore library)
        var user = Meteor.user();
        var photographerId = _.extend(photographerDatas, {
            userId: user._id
        });
        // insert init datas to Photographers Collection
        Photographers.insert(photographerDatas);
        return {
            _id: user._id
        }
    },
    //
    initModelProfile: function(modelDatas) {
        check(Meteor.userId(), String);
        check(modelDatas, {
            profileType: String,
            initProfileCollection: Boolean,
            initCreationDate: Date,
            creationStep: Number
        });
        // update he profileType to model
        Meteor.users.update({ _id: Meteor.userId() }, { $set: {'profile.profileType': modelDatas.profileType}});
        // init additionnal default datas by the way of _.extend object (underscore library)
        var user = Meteor.user();
        var photographerId = _.extend(modelDatas, {
            userId: user._id
        });
        // insert init datas to Models Collection
        Models.insert(photographerDatas);
        return {
            _id: user._id
        }
    }
});
