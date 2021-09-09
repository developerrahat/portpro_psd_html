/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var scrollHeader = $(window);
var sticky = scrollHeader.scrollTop();

scrollHeader.scroll(function () {
  if(scrollHeader.scrollTop() > sticky){
    $('.header').addClass('scrollUp');
  }
  else{
    $('.header').removeClass('scrollUp');
  }
  
  sticky = scrollHeader.scrollTop();
})