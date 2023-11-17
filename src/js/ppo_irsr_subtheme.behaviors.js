(function ($, once) {
  'use strict';
  Drupal.behaviors.ppoIrsrSubtheme = {
    attach: function (context) {
      const searchIcon = $('<i />', { class: 'fas fa-search'});
      const menuSearchLink = $('<a>', { class: 'menu-search-link', 'href': '/search', 'aria-label': 'Go to search page' }).prepend(searchIcon);
      $('.su-multi-menu', context).append(menuSearchLink);

      // Replace <p> tag for quote-text banner with <blockquote>
      $(once('quote-text', '.irsr-wrapper--banner-quote-text', context))
        .find('p')
        .contents()
        .unwrap()
        .wrap('<blockquote/>');
    }
  };

})(jQuery, once);