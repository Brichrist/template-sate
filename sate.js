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

  function resizeInput() {
    $("#what-we-do .mask").style.width = this.value.length + "ch";
  }

  var input = document.querySelector('#what-we-do .text'); // get the input element
input.addEventListener('#what-we-do .text', resizeInput); // bind the "resizeInput" callback on "input" event
resizeInput.call(input); // immediately call the function