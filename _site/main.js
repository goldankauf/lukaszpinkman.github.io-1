
$(document).ready(function() {

  $('.menu').click(function(e) {
    e.stopPropagation();
    $('nav').toggleClass('active');
 });

  $(document).click(function() {
    $('nav').removeClass('active');
    });
});




$('.item').click(function(){
  $('.preview').fadeIn();
});

$('.preview').click(function(){
  $(this).fadeOut();
}).children('img').click(function(e){
  return false;
});
