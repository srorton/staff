// Index
Template.staff.onRendered(function(){
   //create new alertify
    createNewAlertify('staff');
});
Template.staff.events({
    'click .js-add-new': function () {
        alertify.staff(renderTemplate(Template.staffInsert))
        .set({
            title:fa('plus', 'staff')
        })
        .maximize();
    }
});


// Update
Template.staffUpdate.helpers({
    data: function () {
        var id = FlowRouter.getParam('id');
        var data = Staff.findOne({_id: id});
        return data;

    }
});


// Action
Template.staffAction.events({
    'click .js-update': function () {
        FlowRouter.go('staffUpdate', {id: this._id})
    },
    'click .js-destroy': function () {
        var rem = this;
        alertify.confirm("This is a confirm dialog.",
            function(){
                Staff.remove(rem._id);
                alertify.success('Ok');
            },
            function(){
                alertify.error('Cancel');
            });

    }
});

AutoForm.addHooks('staffUpdate',{
    onSuccess: function(formType, result) {
        FlowRouter.go('staff');
        Bert.alert('success', 'success', 'growl-top-right' );

    },
    onError: function(formType, result){
        Bert.alert('Error', 'danger', 'growl-top-right' );
    }

});
AutoForm.addHooks('staffInsert',{
    before:{
        insert:function (doc){
            doc._id= ideGenerator.gen(Staff, 4);
            return doc;
        }
    },
    onSuccess: function(formType, result) {
        Bert.alert('success', 'success', 'growl-top-right' );

    },
    onError: function(formType, result){
        Bert.alert('Error', 'danger', 'growl-top-right' );
    }

});