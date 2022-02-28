/* ----------------- Start Document ----------------- */
(function($) {
    "use strict";

    $(document).ready(function() {
        /*----------------------------------------------------*/
        /*   Bg Image Path
        /*----------------------------------------------------*/
        var dataBgItem = $('*[data-bg-image-path]');

        dataBgItem.each(function() {
            let imgPath = $(this).attr('data-bg-image-path');
            $(this).css('background-image', 'url(' + imgPath + ')');
        });

        /*----------------------------------------------------*/
        /*   Counter Up
        /*----------------------------------------------------*/

        var counterItem = $('.counter');

        counterItem.counterUp({
            delay: 10,
            time: 1000
        });

        $.scrollIt({
            upKey: 38, // key code to navigate to the next section
            downKey: 40, // key code to navigate to the previous section
            easing: 'linear', // the easing function for animation
            scrollTime: 600, // how long (in ms) the animation takes
            activeClass: 'active', // class given to the active nav element
            onPageChange: null, // function(pageIndex) that is called when page is changed
            topOffset: 0 // offste (in px) for fixed top navigation
        });

        /*----------------------------------------------------*/
        /*  Back to Top
        /*----------------------------------------------------*/
        var pxShow = 600; // height on which the button will show
        var fadeInTime = 300; // how slow / fast you want the button to show
        var fadeOutTime = 300; // how slow / fast you want the button to hide
        var scrollSpeed = 500; // how slow / fast you want the button to scroll to top.

        $(window).scroll(function() {
            if ($(window).scrollTop() >= pxShow) {
                $("#backtotop").fadeIn(fadeInTime);
            } else {
                $("#backtotop").fadeOut(fadeOutTime);
            }
        });

        $('#backtotop a').on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, scrollSpeed);
            return false;
        });


        // Variables
        let header = $('.header');
        let logoTransparent = $('.logo-transparent');
        let scrollTopBtn = $('.scroll-top-btn');
        let logoNormal = $('.logo-normal');
        let windowWidth = $(window).innerWidth();
        let scrollTop = $(window).scrollTop();
        let $dropdown = $('.dropdown');
        let $dropdownToggle = $('.dropdown-toggle');
        let $dropdownMenu = $('.dropdown-menu');
        let showClass = 'show';

        $('.menu-link').on('click', function() {
            $('#fixedNavbar').collapse('hide');
        });

        // When Window On Scroll
        $(window).on('scroll', function() {
            let scrollTop = $(this).scrollTop();

            if (scrollTop > 85) {
                logoTransparent.show();
                logoNormal.hide();
                header.addClass('header-shrink');
                scrollTopBtn.addClass('active');
            } else {
                logoTransparent.hide();
                logoNormal.show();
                header.removeClass('header-shrink');
                scrollTopBtn.removeClass('active');
            }
        });

        // The same process is done without page scroll to prevent errors.
        if (scrollTop > 85) {
            logoTransparent.show();
            logoNormal.hide();
            header.addClass('header-shrink');
            scrollTopBtn.addClass('active');
        } else {
            logoTransparent.hide();
            logoNormal.show();
            header.removeClass('header-shrink');
            scrollTopBtn.removeClass('active');
        }

        /*----------------------------------------------------*/
        /*  Accordions
        /*----------------------------------------------------*/
        var $accor = $('.accordion');


        $accor.each(function() {
            $(this).toggleClass('ui-accordion ui-widget ui-helper-reset');
            $(this).find('h3').addClass('ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all');
            $(this).find('div').addClass('ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom');
        });

        var $trigger = $accor.find('h3');

        $trigger.on('click', function(e) {
            var location = $(this).parent();

            if ($(this).next().is(':hidden')) {
                var $triggerloc = $('h3', location);
                $triggerloc.removeClass('ui-accordion-header-active ui-state-active ui-corner-top').next().slideUp(300);
                $triggerloc.find('span').removeClass('ui-accordion-icon-active');
                $(this).find('span').addClass('ui-accordion-icon-active');
                $(this).addClass('ui-accordion-header-active ui-state-active ui-corner-top').next().slideDown(300);
            } else if ($(this).is(':visible')) {
                var $triggerloc = $('h3', location);
                $triggerloc.removeClass('ui-accordion-header-active ui-state-active ui-corner-top').next().slideUp(300);
                $triggerloc.find('span').removeClass('ui-accordion-icon-active');
            }
            e.preventDefault();
        });
    });
})(this.jQuery);