setInterval(function () {
    //
    }, 4000 
);

var taglines = [
"Lucky Husband", 
"Software Consultant",
"Hapless Handyman",
"Passionate Web Technologist",
"Lively Jokester",
"Aspiring Homebrewer",
"Impatient Pitmaster",
"Efficiency Seeker",
"Beagle Lover",
"Proud Southpaw",
"Movie Buff"
]

console.log(taglines.length)

for (i = 0; i < 3; i++) {
    var randomTagline = taglines[Math.floor(Math.random()*taglines.length)]
    $('.tagline').append("<span>" + randomTagline + "</span>")
    taglines.splice(taglines.indexOf(randomTagline),1)
}


$(function(){

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
