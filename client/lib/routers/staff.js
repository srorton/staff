// Staff
FlowRouter.route('/staff', {
    name: "staff",
    action: function (params) {
        BlazeLayout.render("MainLayout", {content: "staff"});
    },
    breadcrumb: {
        title: 'Staff'
    }
});
FlowRouter.route('/staffInsert', {
    name: "staffInsert",
    action: function (params) {
        BlazeLayout.render("MainLayout", {content: "staffInsert"});
    },
    breadcrumb: {
        title: 'StaffInsert',
        parent: 'staff'
    }
});
FlowRouter.route('/staffUpdate/:id', {
    name: "staffUpdate",
    action: function (params, queryParams) {
        BlazeLayout.render("MainLayout", {content: "staffUpdate"});
    },
    breadcrumb: {
        title: 'StaffUpdate',
        parent: 'staff'
    }
});