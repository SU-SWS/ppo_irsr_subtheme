(function ($, once) {
  'use strict';
  Drupal.behaviors.ppoIrsrSubtheme = {
    attach: function (context) {
      // const searchSpan = $('<span />', { 'aria-hidden': 'true' }).prependTo(menuSearchButton);
      // const searchSpan = $('<span />');
      // const searchIcon = $('<i />', { class: 'fas fa-search'}).prependTo(searchSpan);
      const searchIcon = $('<i />', { class: 'fas fa-search'});
      const menuSearchLink = $('<a>', { class: 'menu-search-link', 'href': '/search', 'aria-label': 'Go to search page' }).prepend(searchIcon);
      // const menuSearchButton = $('<a>', { class: 'menu-search-button', 'href': '/search', 'aria-label': 'Go to search page' }).prepend(searchSpan);
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