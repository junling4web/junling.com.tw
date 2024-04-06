document.addEventListener('DOMContentLoaded', function() {
  const topButton = document.getElementById('topButton');

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
      topButton.style.display = 'block';
    } else {
      topButton.style.display = 'none';
    }
  });

  topButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  if (window.pageYOffset > 100) {
    topButton.style.display = 'block';
  } else {
    topButton.style.display = 'none';
  }
});

$(function(){
  $('.navbar-nav').off('click').on('click', function(){
    var width = $(window).width();
    if(width < 768){
      $('#toggleButton').trigger('click');
    }
  });
});
