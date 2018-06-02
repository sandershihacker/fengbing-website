/* Scripts */


$(document).ready(function() {
  $("#more-button").click(function() {
      console.log("clicked");
      $('.menu-buttons-hidden').fadeToggle();
      $('.menu-buttons').toggleClass("dark-background");
  });
});
