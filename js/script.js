$(document).ready(function() {


$('.timelineimg')
    .on('mouseenter', function(){
        var div = $(this);
        div.stop(true, true).animate({ 
            margin: -5,
            width: "+=10",
            height: "+=10"
        }, 'fast');
    })
    .on('mouseleave', function(){
        var div = $(this);
        div.stop(true, true).animate({ 
            margin: 0,
            width: "-=10",
            height: "-=10"
        }, 'fast');
    })

});