$('nav.mobile').click(function () {
    var menuList = $('nav.mobile ul');
    menuList.slideToggle(150);
});

$('nav.mobile a').click(function () {
    var menuList = $('nav.mobile ul');
    menuList.slideToggle(150);
});

var $doc = $('html,body');
$('.nav-link').click(function () {
    $doc.animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 90
    }, 500);
    return false;
});