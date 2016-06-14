Teacher =new Mongo.Collection('teach');
TeacherSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 20
    },
    gender: {
        type: String,
        label: "Gender",
        autoform: {
            type:"select2",
            options: [
                {label: "Female", value: "F"},
                {label: "Male", value: "M"}

            ]
        }
    },
    subject: {
        type: String,

    },
    phone:{
        type: String,
        label: 'Phone',

    },
    'address': {
        type: Object,
    },
    'address.city': {
        type: String
    },

    'address.postalCode': {
        type: String,
    }
});

Teacher.attachSchema(TeacherSchema);