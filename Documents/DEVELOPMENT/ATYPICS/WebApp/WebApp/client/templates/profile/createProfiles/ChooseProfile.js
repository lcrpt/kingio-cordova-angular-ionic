Template.ChooseProfile.events({
    "click a#Photographer": function(event){
        event.preventDefault();
        if (confirm('Confirme you are a Photographer.')) {
            var datas = {
                profileType: 'photographer',
                initProfileCollection: true,
                initCreationDate: new Date(),
                creationStep: 1
            };
            // METHOD
            Meteor.call('initPhotographerProfile', datas, function(error, result){
                if (!error) {
                    Router.go('UpdatePhotographer');
                    // Router.go('PhotographerProfile', {_id: result._id});
                    // sAlert.success('Your Post has been successfully added !', {});
                } else {
                    sAlert.warning('Oops !', {});
                }
            });
        }else{
            sAlert.warning('Oops !', {});
        }
    },
    "click a#Model": function(event){
        event.preventDefault();
        if (confirm('Confirme you are a Model.')) {
            var datas = {
                profileType: 'model',
                initProfileCollection: true,
                initCreationDate: new Date(),
                creationStep: 1
            };
            // METHOD
            Meteor.call('initModelProfile', datas, function(error, result){
                if (!error) {
                    Router.go('ModelProfile', {_id: result._id});
                    // sAlert.success('Your Post has been successfully added !', {});
                } else {
                    sAlert.warning('Oops !', {});
                }
            });
        }else{
            sAlert.warning('Oops !', {});
        }
    }
});
