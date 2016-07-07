Template.student.events({
    'click .play': function () {
        FlowRouter.go('/');
        var s = new buzz.sound('/sound/360.mp3');
        s.play();
    }
});


