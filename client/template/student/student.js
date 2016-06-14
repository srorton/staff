// Index
Template.student.events({
    'click .js-add-new': function () {
        FlowRouter.go('studentInsert');
    }
});
// Update
Template.studentUpdate.helpers({
    data: function () {
        var id = FlowRouter.getParam('id');
        var data = Student.findOne({_id: id});
        return data;

    }
});


// Action
Template.studentAction.events({
    'click .js-update': function () {
        FlowRouter.go('studentUpdate', {id: this._id})
    },
    'click .js-destroy': function () {
        var rem = this;
        alertify.confirm("This is a confirm dialog.",
            function(){
                Student.remove(rem._id);
                alertify.success('Ok');
            },
            function(){
                alertify.error('Cancel');
            });

    }
});

AutoForm.addHooks('studentUpdate',{
    onSuccess: function(formType, result) {
        FlowRouter.go('student');
        Bert.alert('success', 'success', 'growl-top-right' );

    },
    onError: function(formType, result){
        Bert.alert('Error', 'danger', 'growl-top-right' );
    }

});
AutoForm.addHooks('studentInsert',{
    onSuccess: function(formType, result) {
        Bert.alert('success', 'success', 'growl-top-right' );

    },
    onError: function(formType, result){
        Bert.alert('Error', 'danger', 'growl-top-right' );
    }

});