(function ($) {
"use strict";



    
    
    /*-------------------------
      main-menu active
    --------------------------*/
    $('nav#dropdown').meanmenu({
        meanScreenWidth: "767",
        meanMenuContainer: '.mobile-menu'
    });
    
    /* menu  sticky */
    var header = $('.header-bottom');
    var win = $(window);
    
    win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < 1) {
            header.removeClass("sticky");
        } else {
            header.addClass("sticky");
        }
    });
    
    





})(jQuery);	