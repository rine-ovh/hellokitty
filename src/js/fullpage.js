new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    menu: '#menu',
    anchors: ['introduction','presentation', 'family', 'friends'],
    scrollOverflow: true,
    scrolloverflowmacstyle: false,
    controlArrows: true,
    // controlArrowsHTML: [
    //     '<div class="my-arrow"><i class="fas fa-arrow-alt-circle-left">',
    //     '<div class="my-arrow"><i class="fas fa-arrow-alt-circle-right">'
    // ],
    slidesNavigation: true,
    slidesNavPosition: 'bottom',



    

    afterSlideLoad: function(section, origin, destination, direction) {
        const slidesNav = document.querySelector('.fp-slidesNav ul');
        if (!slidesNav) return;
    
        const bullets = slidesNav.querySelectorAll('li');
        const activeIndex = destination.index; // current active slide index
    
        bullets.forEach((bullet, index) => {
          if (index <= activeIndex) {
            bullet.classList.add('visible');
          } else {
            bullet.classList.remove('visible');
          }
        });
      },
    
      afterRender: function() {
        // Set initial visible bullets on page load
        const slidesNav = document.querySelector('.fp-slidesNav ul');
        if (!slidesNav) return;
    
        const bullets = slidesNav.querySelectorAll('li');
        bullets.forEach((bullet, index) => {
          if (index === 0) {
            bullet.classList.add('visible');
          } else {
            bullet.classList.remove('visible');
          }
        });
      }
});