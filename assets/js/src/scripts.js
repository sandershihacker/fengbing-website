/* Scripts */


$(document).ready(function() {
    $.toggleMenu = function() {
        $('#more-button').toggle();
        $('.menu-buttons-hidden').fadeToggle();
        $('.menu-buttons').toggleClass("dark-background");
    }
    $('#more-button').click($.toggleMenu);
    $('#close-button').click($.toggleMenu);
});
