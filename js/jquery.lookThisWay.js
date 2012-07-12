/**
 * jQuery Plugin for creating an image box that "follows"
 * the mouse user by swapping background images depending
 * on the current cursor position.
 *
 * @requires doTimeout for extre effeciency.
 *
 * @author Jimmy Hillis <jimmy@hatchd.com.au>
 * @author Jack Armley <jack@hatchd.com.au>
 */

(function($){

    $.fn.pictureFollow = function pictureFollow(settings) {

        settings = settings || {};

        $(this).each(function() {

            var $that = $(this)
              , elemWidth = $that.width() // the width of the image to use as block
              , elemHeight = $that.height() // the height of the image to use as a blcok
              , elemOffset = $that.offset();  // coordinates of the block

            // On each cursor move
            $(window).mousemove(function(event) {

                /* @todo Write some efficient code here by only allowing
                 * a change every X amount of time, .doTimeout likely */

                if (event.pageY >= elemOffset.top &&
                  event.pageY <= elemOffset.top + elemHeight &&
                  event.pageX >= elemOffset.left &&
                  event.pageX <= elemOffset.left + elemWidth) {

                    $that.removeClass('look-top look-left look-right look-bottom').addClass('look-middle');

                }

                else if (event.pageY < elemOffset.top &&
                  event.pageX <= elemOffset.left + elemWidth) {

                    // Show top facing image
                    $that.removeClass('look-middle look-left look-right look-bottom').addClass('look-top');

                }

                else if (event.pageY > elemOffset.top &&
                  event.pageX < elemOffset.left) {

                    // show left facing image
                    $that.removeClass('look-middle look-top look-right look-bottom').addClass('look-left');

                }

                else if (event.pageY > elemOffset.top + elemHeight &&
                  event.pageX > elemOffset.left) {

                    // show bottom facing image
                    $that.removeClass('look-middle look-top look-left look-right').addClass('look-bottom');

                }

                else if (event.pageY > elemOffset.top &&
                  event.pageX > (elemOffset.left + elemWidth)) {

                    // show right facing image
                    $that.removeClass('look-middle look-top look-left look-bottom').addClass('look-right');
                }

            });

        });

    };

})(jQuery);
