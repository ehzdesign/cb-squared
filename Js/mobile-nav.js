jQuery(document).ready(function( $ ) {
            $("#menu").mmenu({
               "extensions": [
                  "border-full",
                  // "effect-slide-menu",
                  "effect-zoom-menu"
               ],
               "classNames": {
                  "fixedElements":{
                     "fixed": "header"
                  }
               },
               "counters": true,
               "iconPanels": true,
               "navbar": {
                  "title": "MENU"
               },
               "navbars": [
                  {
                     "position": "top",
                     "content": [
                        "prev",
                        "title",
                        "close"
                     ]
                  },
                  {
                     "position": "bottom",
                     "content": [
                        "<a class='fa fa-envelope' href='mailto:info@cbsquared.com?subject=Inquiry%20from%20CB%20Squared.com'></a>",
                        "<a class='fa fa-twitter' href='https://twitter.com/cb2hairstudio' target='_blank'></a>",
                        "<a class='fa fa-facebook' href='https://www.facebook.com/pages/CB2-Hair-Studio/306529439522411' target='_blank'></a>"
                     ]
                  }
               ]
            });
            var API = $("#menu").data( "mmenu" );
            $("#menu-btn").click(function() {
               API.open();
            });
            
         });