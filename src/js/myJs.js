var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.fa-chevron-right',
    prevEl: '.fa-chevron-left',
  },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });

  let navigation    = document.querySelector(".main-nav");
  let burgerMenu    = document.querySelector(".btn-burger")
  let logo          = document.querySelector(".logo")
  let remove        = document.querySelector("second")
  let scrollGoal    = (window.innerHeight) / 5;
  let dernierScroll = 0;

        window.addEventListener('scroll', function() {
        let alreadyScrolled = window.pageYOffset;
        if(alreadyScrolled > scrollGoal) {
            navigation.classList.add("hide");
            burgerMenu.classList.add("burger-color");
        } else {
            navigation.classList.remove("hide");
            burgerMenu.classList.remove("burger-color");
        }
        // if (alreadyScrolled < dernierScroll) {
        //     navigation.classList.remove("hide");
        // }
        dernierScroll = alreadyScrolled;
        });


        $('.url-video').magnificPopup({
          type: 'iframe',
          
          
          iframe: {
             markup: '<div class="mfp-iframe-scaler">'+
                        '<div class="mfp-close"></div>'+
                        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                        '<div class="mfp-title">Some caption</div>'+
                      '</div>'
          },
          callbacks: {
            markupParse: function(template, values, item) {
             values.title = item.el.attr('title');
            }
          }
        });


       
        let burger = document.querySelector(".burger-menu");
        let btnBurger = document.querySelector(".btn-burger")
        
        btnBurger.addEventListener('click', function() {
            burger.classList.add("active");
});
      let close = document.querySelector('.close')

      close.addEventListener('click', function() {
        burger.classList.remove("active");
  });