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