// Will show confirmation boxes depending on
// the submission form result
var onError = function() {
    $('.js__error').css({
        'opacity': '1',
        'visibility': 'visible'
    });
}

var onSuccess = function() {
    $('.js__success').css({
        'opacity': '1',
        'visibility': 'visible'
    });
}

// Confirmation box Close button click event
$('.js__btn-success, .js__btn-error').click(function(){
    $('.js__error').css({
        'opacity': '0',
        'visibility': 'hidden'
    });
});

// Get and handle the submission form result
$('#contact-us').ajaxForm({
    url : '#',
    dataType : 'json',
    success : function (response) {
        console.log(response);
        onSuccess();
    },
    error : function (err) {
        console.log();
        onError();
    }
});

/* ----- Scroll to buttons ----- */

// From Begin button to About section / From About link to About section
$('.js__btn-begin, .js__btn-about').click(function() {
    // Scroll to top of section in 1000 milliseconds (1 sec)
    $('html, body').animate({scrollTop: $('.js__section-about').offset().top}, 1000);
});

// From Meet the Features link to the Features section
$('.js__btn-features').click(function() {
    // Scroll to top of section in 1000 milliseconds (1 sec)
    $('html, body').animate({scrollTop: $('.js__section-features').offset().top}, 1000);
});

// From Meet the Team link to the Team section
$('.js__btn-meet').click(function() {
    // Scroll to top of section in 1000 milliseconds (1 sec)
    $('html, body').animate({scrollTop: $('.js__section-meet').offset().top + 150}, 1000);
});

// From Contact link to the Contact section
$('.js__btn-contact').click(function() {
    // Scroll to top of section in 1000 milliseconds (1 sec)
    $('html, body').animate({scrollTop: $('.js__section-contact').offset().top}, 1000);
});