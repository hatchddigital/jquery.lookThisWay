/**
 * jQuery Plugin for creating an image box that "follows"
 * the mouse user by swapping background images depending
 * on the current cursor position.
 *
 * @requires doTimeout for extre effeciency.
 *
 * @author Jimmy Hillis <jimmy@hatchd.com.au>
 * @author Jack Armley <jack@hatchd.com.au>
 *
 */

(function($){

    $.fn.pictureFollow = function pictureFollow(settings) {

        settings = settings || {};

        /**
         * This function removes all lookThisWay based classes and
         * returns the element to become chainable
         */
        var removeLookClasses = function removeLookClasses($element) {
          // list of all classes this plugin uses
          var classes = "look-top-left look-top look-top-middle look-top-right "
                      + "look-left look-middle-left look-middle "
                      + "look-middle-right look-right look-bottom-left "
                      + "look-bottom look-bottom-middle look-bottom-right";
          // remove them all
          $element.removeClass(classes);
          return $element;
        };

        $(this).each(function() {

            var $that = $(this)
              , elemWidth = $that.width() // the width of the element used
              , elemHeight = $that.height() // the height of ""
              , elemOffset = $that.offset();  // coordinates of the block

            // On each cursor move
            $(window).mousemove(function(event) {

                /* @todo Write some efficient code here by only allowing
                 * a change every X amount of time, .doTimeout likely */

                /* Top left box */

                if (event.pageY < elemOffset.top &&
                  event.pageX < elemOffset.left) {

                    // Show top facing image
                    removeLookClasses($that).addClass('look-top look-top-left');

                }

                /* Top middle box */

                else if (event.pageY < elemOffset.top &&
                  event.pageX < elemOffset.left + elemWidth) {

                    // Show top facing image
                    removeLookClasses($that).addClass('look-top look-top-middle');

                }

                /* Top right box */

                else if (event.pageY < elemOffset.top &&
                  event.pageX > elemOffset.left + elemWidth) {

                    // Show top facing image
                    removeLookClasses($that).addClass('look-right look-top-right');

                }

                /* Middle left box */

                else if (event.pageY > elemOffset.top &&
                  event.pageX < elemOffset.left &&
                  event.pageY < elemOffset.top + elemHeight) {

                    // show left facing image
                    removeLookClasses($that).addClass('look-left look-middle-left');

                }

                /* Middle (on the element itself) */

                else if (event.pageY >= elemOffset.top &&
                  event.pageY <= elemOffset.top + elemHeight &&
                  event.pageX >= elemOffset.left &&
                  event.pageX <= elemOffset.left + elemWidth) {

                    removeLookClasses($that).addClass('look-middle');

                }

                /* Middle right box */

                else if (event.pageY > elemOffset.top &&
                  event.pageX > elemOffset.left + elemWidth) {

                    // show left facing image
                    removeLookClasses($that).addClass('look-right look-middle-right');

                }

                /* Bottom left box */

                else if (event.pageY > elemOffset.top + elemHeight &&
                  event.pageX < elemOffset.left) {

                    // show bottom facing image
                    removeLookClasses($that).addClass('look-bottom look-bottom-left');

                }

                /* Bottom middle box */

                else if (event.pageY > elemOffset.top + elemHeight &&
                  event.pageX >= elemOffset.left &&
                  event.pageX <= elemOffset.left + elemWidth) {

                    // show bottom facing image
                    removeLookClasses($that).addClass('look-bottom');

                }

                /* Bottom right box */

                else if (event.pageY > elemOffset.top + elemHeight &&
                  event.pageX > elemOffset.left + elemWidth) {

                    // show right facing image
                    removeLookClasses($that).addClass('look-right look-bottom-right');
                }

            });

        });

    };

})(jQuery);
