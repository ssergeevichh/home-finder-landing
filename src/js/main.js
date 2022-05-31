import '../styles/main.scss';

import createMobileMenu from './header/m-menu';
import outputFormData from './header/form-consoling';
import initModal from './modal-form/init-modal';
import Splide from '@splidejs/splide';

createMobileMenu('#menu');
outputFormData('#search-data-form')
initModal('#calling-form', '#calling-modal', {
  fadeDuration: 250,
})

$(document).on('DOMContentLoaded', function () {
  const apartmentSlider = new Splide('#apartments-slider', {
    perPage: 3,
    perMove: 1,
    gap: 50,
    classes: {
      arrows: 'splide__arrows apartments-slider__arrows',
      arrow: 'splide__arrow apartments-slider__arrow',
      prev: 'splide__arrow--prev apartments-slider__arrow-prev',
      next: 'splide__arrow--next apartments-slider__arrow-next',

      pagination: 'splide__pagination apartments-slider__pagination',
    },
    breakpoints: {
      1200: {
        perPage: 2,
      },
      991: {
        gap: 30,
      },
      784: {
        destroy: true,
      }
    }
  }).mount();
})