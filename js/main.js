$(function() {
    $("a.btn").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
          scrollTop: destination
        }, 800);
        return false;
      });

      $('a.call-btn').click( function(event){
        event.preventDefault();
        $('#myOverlay').fadeIn(297,	function(){
          $('#myModal') 
          .css('display', 'block')
          .animate({opacity: 1}, 198);
        });
      });

      $(".nav a").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
          scrollTop: destination
        }, 800);
        return false;
      });
    
      $('#myModal__close, #myOverlay').click( function(){
        $('#myModal').animate({opacity: 0}, 198, function(){
          $(this).css('display', 'none');
          $('#myOverlay').fadeOut(297);
        });
      });

      $('.btn-ghost').click(function (e) {
          e.preventDefault();
          $('.destinations-more').toggleClass ('destinations-visible')
      });

      $(document).ready(function() { 
        var button = $('#button-up');	
        $(window).scroll (function () {
          if ($(this).scrollTop () > 300) {
            button.fadeIn();
          } else {
            button.fadeOut();
          }
      });	 

      button.on('click', function(){
      $('body, html').animate({
      scrollTop: 0
      }, 800);
      return false;
      });		 
      });
});



    
