
//WOW.js Initialzation
new WOW().init();

//Background Color Change
$(window).scroll(function() {
    if ($(this).scrollTop() <= 450) {
        $('#wrapper').addClass('colorOne').removeClass('colorTwo');
    } else if ($(this).scrollTop() <= 800) {
        $('#wrapper').addClass('colorTwo').removeClass('colorThree');
    } else if ($(this).scrollTop() <= 1000) {
        $('#wrapper').addClass('colorThree').removeClass('colorOne');
    } else {
        $('#wrapper').addClass('colorThree');
    }
});


$(document).ready(function () {

    //enable tooltips
    options = { animation:true,}
    $('[data-toggle="tooltip"]').tooltip(options);

    //enable modals on mobile
    $('#whoopsModal').on('shown.bs.modal', function () {
        $('#modalInput').trigger('focus');
    })
});