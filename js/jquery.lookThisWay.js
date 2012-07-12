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

        var grid = settings.grid || 4; // Allow different grid setups depending on your image size

        $(this).each(function() {

            var $that = this
              , elemWidth = this.width // the width of the image to use as block
              , elemHeight = this.height // the height of the image to use as a blcok
              , elemOffset = this.offset();  // coordinates of the block

            // On each cursor move
            $(window).mousemove(function(event) {

                /* @todo Write some efficient code here by only allowing
                 * a change every X amount of time, .doTimeout likely */

                if (event.pageY <= elemOffset.top &&
                  event.pageY >= elemOffset.top + elemHeight &&
                  event.pageX >= elemOffset.left &&
                  event.pageY <= elemOffset.left + elemWidth) {

                    // Show front facing image

                }

                else if (event.pageY < elemOffset.top &&
                  event.pageX <= elemOffset.left + elemWidth) {

                    // Show top facing image
                }

                else if (event.pageY > elemOffset.top &&
                  event.pageX < elemOffset.left) {

                    // show left facing image

                }

                else if (event.pageY > elemOffset.top + elemHeight &&
                  event.pageX > elemOffset.left) {

                    // show bottom facing image

                }

                else if (event.pageY < elemOffset.top + elemHeight &&
                  event.pageX > elemOffset.left + elemWidth) {

                    // show right facing image

                }

            });

        });

    };

})(jQuery);
