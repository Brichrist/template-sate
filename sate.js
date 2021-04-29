var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
  });
  
  $(".switch-active").click(function() { 
    $(".switch-active").removeClass("active"); 
    $(this).addClass("active");      
  });

  var x = document.querySelector(".group-video .active").textContent;
  document.querySelector("#what-we-do .mask2 .text").innerHTML = "<i class=\"fas fa-arrow-left\"></i> "+x + "&nbsp; &nbsp;";  
  // document.querySelector("#play-it").src = "./asset/video/"+ x;  
  document.querySelector("#play-it").setAttribute('src', "./asset/video/"+ x);
  document.querySelector("#tmplt-play-it").load();
  // document.querySelector("#tmplt-play-it").play();



  $(document).ready(function(){
    $(".button-switch-video").on('click', function(e) {
      x = document.querySelector(".group-video .active").textContent;
      document.querySelector("#what-we-do .mask2 .text").innerHTML = "<i class=\"fas fa-arrow-left\"></i> "+x + "&nbsp; &nbsp;";  
      // document.querySelector("#play-it").src = "./asset/video/"+ x;  
      document.querySelector("#play-it").setAttribute('src', "./asset/video/"+ x);
      document.querySelector("#tmplt-play-it").load();
    });
  });