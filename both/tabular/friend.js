TabularTables = {};

TabularTables.Friend = new Tabular.Table({
    name: "Friend",
    collection: Friend,
    columns: [
        //{data: "_id", title: "ID"},
        {data: "name", title: "Name"},
        {data: "gender", title: "Gender"},
        {data: "dateofbirth", title: "Date of Birth"},
        {data: "address", title: "Address"},
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.friendfAction
        }

    ]
});