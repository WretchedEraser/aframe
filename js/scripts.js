$('.moreMenu').click(function() {
  $('.ui.sidebar')
    .sidebar('setting', 'transition', 'overlay')
    .sidebar('toggle')
    .sidebar('attach events', '.moreMenu', 'show')
  ;
});
$('.ui.dropdown')
  .dropdown()
;


if ($(window).width() < 767)
$('.responsiveWidget').parent().css('display', 'inline');
