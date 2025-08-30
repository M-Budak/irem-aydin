function isElementInViewport($el) {
    var top = $el.offset().top;
    var bottom = top + $el.outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return bottom > viewportTop && top < viewportBottom;
}

$(window).on("scroll", function () {
    if (isElementInViewport($(".odometer"))) {
        setTimeout(function () {
            $(".style-1-1").html(7);
            $(".style-1-2").html(500);
            $(".style-1-3").html(96);
            $(".style-1-4").html(15);
        }, 0);
    }
});
