(function ($, once) {
  'use strict';
  Drupal.behaviors.ppoIrsrSubtheme = {
    attach: function (context) {

      // Replace <p> tag for quote-text banner with <blockquote>
      $(once('quote-text', '.irsr-wrapper--banner-quote-text', context))
        .find('p')
        .contents()
        .unwrap()
        .wrap('<blockquote/>');
    }
  };

})(jQuery, once);