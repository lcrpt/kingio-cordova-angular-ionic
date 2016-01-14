Template.PostsForm.rendered = function(){
    $('#ShowPostsTimelineForm').show();
    $('#HidePostsTimelineForm').hide();
    $('#PostsTimelineForm').hide();
    $('#ShowPostsTimelineForm').click(function(){
        $('#PostsTimelineForm').slideDown(300);
        $('#ShowPostsTimelineForm').hide();
        $('#HidePostsTimelineForm').show();
    });
    $('#HidePostsTimelineForm').click(function(){
        $('#PostsTimelineForm').slideUp(300);
        $('#HidePostsTimelineForm').hide();
        $('#ShowPostsTimelineForm').show();
    });
};

// Template.CreateProfil.rendered = function(){
//     $('#profilChoice').show();
//     $('#FormPhotographer').hide();
//     $('#FormModel').hide();
//     $('#BackBtn').hide();
//     // PHOTOGRAPHER
//     $('a#BtnPhotographer').click(function(){
//         $('#profilChoice').hide();
//         $('#FormPhotographer').slideDown(300);
//         $('#FormModel').hide();
//         $('#BackBtn').show();
//     });
//     // MODEL
//     $('a#BtnModel').click(function(){
//         $('#profilChoice').hide();
//         $('#FormPhotographer').hide();
//         $('#FormModel').slideDown(300);
//         $('#BackBtn').show();
//     });
//     // BACK
//     $('a#BackBtn').click(function(){
//         $('#profilChoice').show();
//         $('#FormPhotographer').hide();
//         $('#FormModel').hide();
//         $('#BackBtn').hide();
//     });
// };
