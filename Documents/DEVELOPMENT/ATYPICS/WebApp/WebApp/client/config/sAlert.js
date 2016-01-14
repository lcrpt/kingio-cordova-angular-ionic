Meteor.startup(function () {
    sAlert.config({
        effect: 'stackslide',
        position: 'top-right',
        timeout: 5000,
        html: true,
        onRouteClose: true,
        stack: true,
        // or you can pass an object:
        stack: {
            spacing: 0, // in px
            limit: 3 // when fourth alert appears all previous ones are cleared
        },
        offset: 0, // in px - will be added to first alert (bottom or top - depends of the position in config)
        beep: false
        // examples:
        // beep: '/beep.mp3'  // or you can pass an object:
        // beep: {
        //     info: '/beep-info.mp3',
        //     error: '/beep-error.mp3',
        //     success: '/beep-success.mp3',
        //     warning: '/beep-warning.mp3'
        // }
    });
});


// When i want to display alert after route change this.render()
// sAlert.warning('Opssss!!! No good! Keep me even when the route changes.', {onRouteClose: false, timeout: 10000});
// sAlert.info('Be careful and hide me when the route changes.', {onRouteClose: true, timeout: 10000});
