// Index
Template.teacher.events({
    'click .js-add-new': function () {
        FlowRouter.go('teacherInsert');
    }
});

AutoForm.addHooks('teacherUpdate',{
    onSuccess: function(formType, result) {
        FlowRouter.go('teacher');
        Bert.alert('success', 'success', 'growl-top-right' );

    },
    onError: function(formType, result){
        Bert.alert('Error', 'danger', 'growl-top-right' );
    }

});
AutoForm.addHooks('teacherInsert',{
    onSuccess: function(formType, result) {
        FlowRouter.go('teacher');
        Bert.alert('success', 'success', 'growl-top-right' );

    },
    onError: function(formType, result){
        Bert.alert('Error', 'danger', 'growl-top-right' );
    }

});

// Update

Template.teacherUpdate.helpers({
    data: function () {
        var id = FlowRouter.getParam('id');
        var data = Teacher.findOne({_id: id});
        return data;
    }
});


// Action
Template.teacherAction.events({
    'click .js-update': function () {
        FlowRouter.go('teacherUpdate', {id: this._id})
        console.log('this._id');
        bert.alert('Update', 'success');
    },
    'click .js-destroy': function () {
        var rem= this;
        alertify.confirm("This is a confirm dialog.",
            function(){
                Teacher.remove(rem._id);
                alertify.success('Ok');
            },
            function(){
                alertify.error('Cancel');
            });

    }
});
