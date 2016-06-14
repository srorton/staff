// Index
Template.friend.events({
    'click .js-add-new': function () {
        FlowRouter.go('friendInsert');
    }
});

// Insert
Template.friendInsert.events({
    'click .jsSave': function () {
        var name = $('#name').val();
        var gender = $('#gender').val();
        var  dateofbirth = $('#dateofbirth').val();
        var address = $('#address').val();

        if (name==""||
            gender=="" ||
            address==""||
            dateofbirth==""){
            Bert.alert( 'Input Sometmhing!', 'danger', 'growl-top-right' );
        }else {
            Friend.insert({
                name: name,
                gender: gender,
                dateofbirth: dateofbirth,
                address: address
            });
            Bert.alert( 'Successful added!', 'success', 'growl-top-right' );
        }
    }
});

// Update
Template.friendUpdate.helpers({
    data: function () {
        var id = FlowRouter.getParam('id');
        var data = Friend.findOne({_id: id});
        return data;
    }
});

Template.friendUpdate.events({
    'click #update': function () {
        var _id = $('#_id').val();
        var name = $('#name').val();
        var gender = $('#gender').val();
        var dateofbirth = $('#dateofbirth').val();
        var address = $('#address').val();

        var set = {
            name: name,
            gender: gender,
            dateofbirth: dateofbirth,
            address: address
        };
        Friend.update(_id, {$set: set});
        FlowRouter.go('friend');
        alert('Update Success');
    }

});

// Action
Template.friendfAction.events({
    'click .js-update': function () {
        FlowRouter.go('friendUpdate', {id: this._id})
    },
    'click .js-destroy': function () {
        var rem = this;
        alertify.confirm("This is a confirm dialog.",
            function(){
                Friend.remove(rem._id);
                alertify.success('Ok');
            },
            function(){
                alertify.error('Cancel');
            });
    }
});