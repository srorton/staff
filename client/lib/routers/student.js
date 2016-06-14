// Staff
FlowRouter.route('/student', {
    name: "student",
    action: function (params) {
        BlazeLayout.render("MainLayout", {content: "student"});
    },
    breadcrumb: {
        title: 'Student'
    }
});
FlowRouter.route('/studentInsert', {
    name: "studentInsert",
    action: function (params) {
        BlazeLayout.render("MainLayout", {content: "studentInsert"});
    },
    breadcrumb: {
        title: 'StudentInsert',
        parent: 'student'
    }
});
FlowRouter.route('/studentUpdate/:id', {
    name: "studentUpdate",
    action: function (params, queryParams) {
        BlazeLayout.render("MainLayout", {content: "studentUpdate"});
    },
    breadcrumb: {
        title: 'StudentUpdate',
        parent: 'student'
    }
});
