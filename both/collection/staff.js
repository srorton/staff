Staff = new Mongo.Collection('staff');

StaffSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 20
    },
    gender: {
        type: String,
        label: "Gender",
        autoform: {
            type : "select2",
            options: [
                {label: "Female", value: "F"},
                {label: "Male", value: "M"}

            ]
        }
    },
    dob: {
        type: Date,
        optional: true,
        autoform: {
            type: 'bootstrap-datetimepicker',
            afFieldInput: {
                dateTimePickerOptions: {
                    pickTime: false,
                    format: 'MMM/DD/YYYY'
                }
            }
        }
    },

    address: {
        type: Object
    },
    'address.street': {
        type: String
    },

    'address.city': {
        type: String
    },

    'address.postalCode': {
        type: String,
    }
});

Staff.attachSchema(StaffSchema);