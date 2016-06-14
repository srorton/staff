Student = new Mongo.Collection('student');
StudentSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 20
    },
    gender: {
        type: String,
        label: "Gender",
        autoform: {
            type: "select2",
            options: [
                {label: "Female", value: "F"},
                {label: "Male", value: "M"}
            ]
        }
    },
    subject: {
        type: String,
        label: "Subject",
        max: 25
    },
    advent: {
        type: String,
        label: "Advent",
        max: 10
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

Student.attachSchema(StudentSchema);
