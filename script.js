//wow
new WOW().init();

//jquery
$(function () {
    //totop
    //** totop移動
    $('.totop').click(function () {
        $('html,body').animate({
            'scrollTop': 0
        }, 1000);
    });

    //** totopをページ上部で隠す
    var toTop = $('.totop');
    var header = $('.header');
    toTop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            toTop.fadeIn();
            header.addClass('headerColor');

        } else {
            toTop.fadeOut();
            header.removeClass('headerColor');
        }
    });

    // ページ内移動
    $('.nav-link').click(function () {
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html, body').animate({
            'scrollTop': position - 80
        }, 1000);
    });

    //magnific-popup
    $('.popup_element').magnificPopup({
        type: 'image'
    });

    //wow
    new WOW().init();
});

