/*---------------------------------------------------------------------
    File Name: custom.js - Simplified for React compatibility
---------------------------------------------------------------------*/

$(document).ready(function () {
        
        "use strict";
        
        // Initialize tooltips if Bootstrap is available
        if (typeof $.fn.tooltip === 'function') {
                $('[data-toggle="tooltip"]').tooltip();
        }
        
        // Handle navbar toggle
        $('.navbar-toggler').on('click', function() {
                $('.navbar-collapse').toggleClass('show');
        });
        
        // Smooth scrolling for anchor links
        $('a[href^="#"]').on('click', function(event) {
                var target = $(this.getAttribute('href'));
                if( target.length ) {
                        event.preventDefault();
                        $('html, body').stop().animate({
                                scrollTop: target.offset().top
                        }, 1000);
                }
        });
        
        // Simple carousel functionality (React handles the actual carousel)
        $('.carousel-control-prev').on('click', function(e) {
                e.preventDefault();
        });
        
        $('.carousel-control-next').on('click', function(e) {
                e.preventDefault();
        });
        
});