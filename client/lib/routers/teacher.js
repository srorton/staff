// Staff
FlowRouter.route('/teacher', {
    name: "teacher",
    action: function (params) {
        BlazeLayout.render("MainLayout", {content: "teacher"});
    },
    breadcrumb: {
        title: 'teacher'
    }
});
FlowRouter.route('/teacherInsert', {
    name: "teacherInsert",
    action: function (params) {
        BlazeLayout.render("MainLayout", {content: "teacherInsert"});
    },
    breadcrumb: {
        title: 'TeacherInsert',
        parent: 'teacher'
    }
});
FlowRouter.route('/teacherUpdate/:id', {
    name: "teacherUpdate",
    action: function (params, queryParams) {
        BlazeLayout.render("MainLayout", {content: "teacherUpdate"});
    },
    breadcrumb: {
        title: 'teacherUpdate',
        parent: 'teacher'
    }
});