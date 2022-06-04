import Splide from '@splidejs/splide';

export default function initApartmentSlider() {
  $(document).on('DOMContentLoaded', function () {
    const apartmentSlider = new Splide('#apartments-slider', {
      perPage: 3,
      perMove: 1,
      gap: 50,
      autoplay: true,
      type: 'loop',
      classes: {
        arrows: 'splide__arrows apartments-slider__arrows',
        arrow: 'splide__arrow apartments-slider__arrow',
        prev: 'splide__arrow--prev apartments-slider__arrow-prev',
        next: 'splide__arrow--next apartments-slider__arrow-next',
      },
      pagination: false,
      breakpoints: {
        1200: {
          perPage: 2,
        },
        991: {
          gap: 30,
        },
        576: {
          perPage: 1,
          gap: 0,
          arrows: false,
        },
      },
    }).mount();
  })
}