// Meteor.methods({
//     /**
//     * Invoked by autoform to add a new Profil Data record.
//     * @param doc The Photographers document.
//     */
//     insertPhotographers: function(doc) {
//         check(doc);
//         console.log(doc);
//         Photographers.insert(doc);
//     }
//     /**
//     *
//     * Invoked by autoform to update a Student Data record.
//     * @param doc The StudentData document.
//     * @param docID It's ID.
//     */
//     // updateStudentData: function(doc, docID) {
//     //   console.log("Updating", doc);
//     //   check(doc, StudentData.simpleSchema());
//     //   StudentData.update({_id: docID}, doc);
//     // }
// });

/* METHOD (SÉCURISATION DES DONNÉES AVANT L'INSERTION) */

// Meteor.methods({
//   postInsert: function(postAttributes) {
//     check(Meteor.userId(), String);
//     check(postAttributes, {
//       title: String,
//       url: String
//     });
//
//     var errors = validatePost(postAttributes);
//     if (errors.url || errors.title)
//       throw new Meteor.Error('invalid-post', "You must set a title and URL for your post");
//
//     var postWithSameLink = Posts.findOne({url: postAttributes.url});
//     if(postWithSameLink){
//       return {
//         postExists: true,
//         _id: postWithSameLink._id
//       }
//     }
//
//     var user = Meteor.user();
//     var post = _.extend(postAttributes, {
//       userId: user._id,
//       author: user.username,
//       submitted: new Date(),
//       commentsCount: 0
//     });
//
//     var postId = Posts.insert(post);
//     return {
//       _id: postId
//     }
//   }
// });












//
