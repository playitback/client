require([
    // Libraries
    'vendor/backbone',
    'vendor/underscore/underscore',

    'viewloader',

    // Views
    'view/media'
],
function(
    // Libraries
    Backbone,
    _,

    ViewLoader,

    // Views
    MediaView
) {
    this.viewLoader = new ViewLoader();

    this.viewLoader.setRootView(MediaView);
});