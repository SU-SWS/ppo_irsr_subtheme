(function ($, once) {
  'use strict';
  Drupal.behaviors.ppoIrsrSubtheme = {
    attach: function (context) {
      const menuSearchButton = $('<a>', { class: 'menu-search-button su-site-search__submit', 'href': '/search', 'aria-label': 'Go to search page' });
      $('.su-multi-menu', context).append(menuSearchButton);

      // Replace <p> tag for quote-text banner with <blockquote>
      $(once('quote-text', '.irsr-wrapper--banner-quote-text', context))
        .find('p')
        .contents()
        .unwrap()
        .wrap('<blockquote/>');
    }
  };

})(jQuery, once);