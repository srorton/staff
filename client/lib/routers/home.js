// Home
FlowRouter.route('/', {
    name: 'home',
    action: function (params) {
        BlazeLayout.render("MainLayout", {content: "home"});
    },

});