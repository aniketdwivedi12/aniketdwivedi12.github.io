$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 600) { 
          $('.navbar').addClass('solid');
          $('.navig-bar a').css('color','black');
      } else {
          $('.navbar').removeClass('solid');
      }
    });
});