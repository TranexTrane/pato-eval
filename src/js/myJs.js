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

// nav bar

  let navigation    = document.querySelector(".main-nav");
  let burgerMenu    = document.querySelector(".btn-burger")
  
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

// lightbox
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

        let burger     = document.querySelector(".burger-menu");
        let btnBurger  = document.querySelector(".btn-burger")
        let fullPage   = document.querySelector(".full-page")
        btnBurger.addEventListener('click', function() {
            burger.classList.add("active");
            fullPage.classList.add("active2")

});
      let close = document.querySelector('.close')
      close.addEventListener('click', function() {
        burger.classList.remove("active");
        fullPage.classList.remove("active2")
  });

 // external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

let myButton = document.getElementById(".back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}