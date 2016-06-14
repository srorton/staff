TabularTables = {};

TabularTables.Teacher = new Tabular.Table({
    name: "Teacher",
    collection: Teacher,
    columns: [
        {data: "_id", title: "ID"},
        {data: "name", title: "Name"},
        {data: "gender", title: "Gender"},
        {data: "subject", title: "Subject",},
        {data: "phone", title: "Phone"},
        {
            data: "address",
            title: "Address",
            render: function (val, type, doc) {
                return val.city + ' (' + val.postalCode + ')';
            }
        },
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.teacherAction
        }

    ]
});
