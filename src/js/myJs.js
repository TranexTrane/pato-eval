var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
  });

  let navigation = document.querySelector(".main-nav");
  let burgerMenu = document.querySelector(".btn-burger")
  let logo       = document.querySelector(".logo")
  let remove     = document.querySelector("second")
        let scrollGoal = (window.innerHeight) / 5;
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
