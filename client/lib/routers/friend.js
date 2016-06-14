// friend
FlowRouter.route('/friend', {
    name: "friend",
    action: function (params) {
        BlazeLayout.render("MainLayout", {content: "friend"});
    }
});
FlowRouter.route('/friendInsert', {
    name: "friendInsert",
    action: function (params) {
        BlazeLayout.render("MainLayout", {content: "friendInsert"});
    }
});
FlowRouter.route('/friendUpdate/:id', {
    name: "friendUpdate",
    action: function (params, queryParams) {
        BlazeLayout.render("MainLayout", {content: "friendUpdate"});
    }
});