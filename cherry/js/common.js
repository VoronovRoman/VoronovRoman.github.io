
$("button").click(function(){
        $(".ham_menu").slideToggle();
    });


var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu

});



    $('.reviews').slick({
  	arrows: false,
  	dots: true,
  	mobileFirst: true
  });