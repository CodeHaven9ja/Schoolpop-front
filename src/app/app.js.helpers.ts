declare var jQuery: any;

export function adjustMainContentHeight() {
  // console.log("Did something");
  // Adjust main content height
  var docHeight = jQuery(document).height();
  if (docHeight > jQuery('.body-content').height())
    jQuery('.body-content').height(docHeight);
}

export function visibleSubMenuClose() {

  jQuery('.menu-list').each(function () {
    var t = jQuery(this);
    if (t.hasClass('nav-active')) {
      t.find('> ul').slideUp(300, function () {
        t.removeClass('nav-active');
      });
    }
  });
}

export function toggleSidebar() {
  jQuery('.menu-list > a').click(function () {

    var parent = jQuery(this).parent();
    var sub = parent.find('> ul');

    if (!jQuery('body').hasClass('sidebar-collapsed')) {
      if (sub.is(':visible')) {
        sub.slideUp(300, function () {
          parent.removeClass('nav-active');
          jQuery('.body-content').css({ height: '' });
          adjustMainContentHeight();
        });
      } else {
        visibleSubMenuClose();
        parent.addClass('nav-active');
        sub.slideDown(300, function () {
          adjustMainContentHeight();
        });
      }
    }
    return false;
  });
}

export function hover() {
  jQuery('.side-navigation > li').hover(function () {
    jQuery(this).addClass('nav-hover');
  }, function () {
    jQuery(this).removeClass('nav-hover');
  });
}