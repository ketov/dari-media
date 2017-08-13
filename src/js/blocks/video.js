$(document).ready(function () {
    $('.video').on('click', function () {
        $('#black-bg').stop(true, true).fadeIn(400);
        setTimeout(function () {
            $('#video').fadeIn(400);
        }, 480);
    });

    /*$('#close-popup-buy').on('click', function () {
        $('.popup-buy').stop(true, true).fadeOut(400);
        setTimeout(function () {
            $('#black-bg').fadeOut(400);
        }, 480);
    });*/
    
    
     $('#black-bg').click(function (event) {
        if ($(event.target).closest("#video").length)
            return;
        $("#video").fadeOut(400);
        setTimeout(function () {
            $('#black-bg').fadeOut(400);
        }, 480);
    });

});