setInterval(function () {
    //
    }, 4000 
);


$(function(){
  
  // $('.scrollTo').on('click', function(e) {
  //     e.preventDefault();
  //     Foundation.lib_methods.scrollTo($(window), $($(e.currentTarget).attr('href')).offset().top, 200);
  // });

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 45
        }, 1000);
        return false;
      }
    }
  });

});