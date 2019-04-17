$(document).ready(function () {
    $(".menu").click(function(event){
        event.stopPropagation();
        $(".side-nav").removeClass('hide-menu').addClass('show-menu');
    });
    $('body,html').click(function(e){
        $('.side-nav').removeClass('show-menu').addClass('hide-menu');
     });
});