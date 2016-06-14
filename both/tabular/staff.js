TabularTables = {};

TabularTables.Staff = new Tabular.Table({
    name: "Staff",
    collection: Staff,
    columns: [
        {data: "_id", title: "ID"},
        {data: "name", title: "Name"},
        {data: "gender", title: "Gender"},
        {data: "dob",
            title: "Date of Birth",
            render:function(val, type, doc){
                if (val instanceof Date){
                    return moment(val).format('MMM/DD/YYYY');
                }else{
                    return 'Never';
                }
            }
        },
        {
            data: 'address',
            title: 'Address',
            //render: function (val, type, doc) {
            // es6 arrow function
            render: (val,type,doc) => {
                //es6 string interpolation
                return `${val.street} +${val.postalCode}`;
                //return val.street+' ('+val.postalCode+')';
            }
        },
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.staffAction
        }

    ]
})
;
