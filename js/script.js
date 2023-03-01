
$(function() {
    "use strict";
    $('#preloader').on('click', function() {
        $(this).fadeOut();
    });
    /*-----------------------------------
     * STICKY MENU - HEADER
     *-----------------------------------*/
    var $navmenu = $('.nav-menu');
    $(window).on('scroll', function() {
        var contactHeight = $("#ContactUs").prop("scrollHeight");
        if(($(window).scrollTop() + $(window).height() + 300) > $(document).height()) {
            if(window.location.hash) {
                var hash = window.location.hash.substring(1);
                if (hash === "ContactUs") {
                    console.log('focus1');
                    document.getElementById("name-textbox").focus();
                }
            } else {
                console.log('focus2');
                document.getElementById("name-textbox").focus();
            }
        }
    });
});