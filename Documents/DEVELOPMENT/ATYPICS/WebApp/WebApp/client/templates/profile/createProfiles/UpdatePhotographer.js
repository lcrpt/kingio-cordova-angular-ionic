Template.UpdatePhotographer.helpers({
    userId: function() {
        Photographers.find({"userId": Meteor.userId()});
    }
    // autoSaveMode: function () {
    //     return Session.get("autoSaveMode") ? true : false;
    // },
    // selectedPersonDoc: function () {
    //     return People.findOne(Session.get("selectedPersonId"));
    // },
    // isSelectedPerson: function () {
    //     return Session.equals("selectedPersonId", this._id);
    // },
    // formType: function () {
    //     if (Session.get("selectedPersonId")) {
    //         return "update";
    //     } else {
    //         return "disabled";
    //     }
    // },
    // disableButtons: function () {
    //     return !Session.get("selectedPersonId");
    // }
});
