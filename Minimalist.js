document.addEventListener('DOMContentLoaded', function () {

  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var TireStack = document.getElementById('TireStack');
  var CarFront = document.getElementById('CarFront');
  var Building = document.getElementById('Building');
  var CarBack = document.getElementById('CarBack');
  var Sedan = document.getElementById('Sedan');
  var Sedan2 = document.getElementById('Sedan2');
  var ManyCar = document.getElementById('ManyCar');

  if (screenWidth >= 768) {
      TireStack.src = './assets/tire-stack.webp';
      CarFront.src = './assets/car-front.webp';
      Building.src = './assets/building.webp';
      CarBack.src = './assets/car-back.webp';
      Sedan.src = './assets/car-sedan.webp';
      Sedan2.src = './assets/car-sedan2.webp';
      ManyCar.src = './assets/many-car.webp';
  }else if (screenWidth >=  567) {
      TireStack.src = './assets/tire-stack-md.webp';
      CarFront.src = './assets/car-front-sm.png';
      Building.src = './assets/building.webp';
      CarBack.src = './assets/car-back.webp';
      Sedan.src = './assets/car-sedan.webp';
      Sedan2.src = './assets/car-sedan2.webp';
      ManyCar.src = './assets/many-car.webp';
  }else{
      TireStack.src = './assets/tire-stack-sm.webp';
      CarFront.src = './assets/car-front-sm.png';
      Building.src = './assets/building-sm.webp';
      CarBack.src = './assets/car-back-sm.webp';
      Sedan.src = './assets/car-sedan-sm.webp';
      Sedan2.src = './assets/car-sedan2-sm.webp';
      ManyCar.src = './assets/many-car-sm.webp';
  }

  const observerLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-left-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerCenter = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-center-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerFadeUp = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-up-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerSlideUp = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('slide-up-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerSlideLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('slide-left-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  observerCenter.observe(document.querySelector('.header'));
  observerSlideLeft.observe(document.querySelector('.about-card-container'));
  observerLeft.observe(document.querySelector('.car-img-container'));
  observerSlideUp.observe(document.querySelector('.instagram'));

});
