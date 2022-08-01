function setupHeader() {
  var menu = document.getElementById('header-mobile-menu'),
      content = document.getElementsByClassName('content')[0] ||
                document.getElementsByClassName('fluid-content')[0] ||
                document.getElementsByClassName('home__content')[0];

  if (menu && content) {
    function addClass(e, c) {
      if (e.classList)
        e.classList.add(c);
      else
        e.className += ' ' + c;
    }

    function removeClass(e, c) {
      if (e.classList)
        e.classList.remove(c);
      else
        e.className = e.className.replace(new RegExp('(^|\\b)' + c.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    // Show menu
    document.getElementById('header-menu').onclick = function (e) {
      e.preventDefault();

      removeClass(menu, 'header__mobile-menu--hidden');
      addClass(document.body, 'header__mobile__body__noscroll');
      addClass(content, 'header__mobile__body__zoom--out');

      setTimeout(function () {
        addClass(menu, 'header__mobile-menu--show');
      }, 10);
    };

    // Hide menu
    document.getElementById('header-menu-close').onclick = function (e) {
      e.preventDefault();

      removeClass(menu, 'header__mobile-menu--show');
      removeClass(document.body, 'header__mobile__body__noscroll');
      removeClass(content, 'header__mobile__body__zoom--out');
      setTimeout(function () {
        addClass(menu, 'header__mobile-menu--hidden');
      });
    };

    content && addClass(content, 'header__mobile__body__zoom');
  }
}

setupHeader();
