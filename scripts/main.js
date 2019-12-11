
//WOW.js Initialzation
new WOW().init();

var hash = "382132701c4733c3402706cfdd3c8fc7f41f80a88dce5428d145259a41c5f12f";
//Background Color Change
$(window).scroll(function() {
    if ($(this).scrollTop() <= 450) {
        $('#wrapper').addClass('colorOne').removeClass('colorTwo');
    } else if ($(this).scrollTop() <= 800) {
        $('#wrapper').addClass('colorTwo').removeClass('colorThree');
    } else if ($(this).scrollTop() >= 2000) {
        $('#wrapper').addClass('colorThree').removeClass('colorOne');
    } else {
        $('#wrapper').addClass('colorThree');
    }
});


$(document).ready(function () {

    var input = "";

    //enable tooltips
    options = { animation:true,}
    $('[data-toggle="tooltip"]').tooltip(options);

    //enable modals on mobile
    $('#whoopsModal').on('shown.bs.modal', function () {
        $('#modalInput').trigger('focus');
    })

    $(window).scroll(function(){
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    //close modal and scroll down
    $("#contactModal").click(function () {
        $('#whoopsModal').modal('hide');
        $('html, body').animate({
            scrollTop: $("#contactForm").offset().top
        }, 2000);
    });
    
    //Simulates typing
    $(document).on('keyup', function (e) {
        //console.log(e.keyCode)
        if(e.keyCode == 13){
            matchHash();
        }else if(e.keyCode==8){
            if(input.length >= 1){
                input = input.slice(0, -1);
                $(".secret").text(input);
            }
        }else if(e.originalEvent.key.toString != "Enter"){
            input = input + "" + e.originalEvent.key.toString();
            $(".secret").append(e.originalEvent.key.toString());
        }
    });

    function matchHash() {
        var pass = sha256.create().update(input).hex()
        if(pass == hash){
            input = "welcome superuser";
            $(".secret").text(input);
            setTimeout(function () {
                input = "";
                $(".secret").text(input);
            }, 1000);
        }else{
            input = "error";
            $(".secret").text(input);
            setTimeout(function () {
                input = "";
                $(".secret").text(input);
            }, 1000);
        }
    }
});