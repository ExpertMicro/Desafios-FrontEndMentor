$(document).click(function(e) {
  var target = e.target;
  $('.dropdown-content').each(function() {
    var $this = $(this);
    var dropdown = $this.prev('.dropbtn');
    if (dropdown[0] == target) $(this).toggle();
    else $(this).hide();
  });
});