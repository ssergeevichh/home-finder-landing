import '../styles/main.scss';

import createMobileMenu from './header/m-menu';
import outputFormData from './header/form-consoling';
import initModal from './modal-form/init-modal';
import handleForm from './modal-form/form-handling';
import initApartmentSlider from './slider/apartment-slider';

createMobileMenu('#menu');
outputFormData('#search-data-form')
initModal('#calling-form', '#calling-modal', {
  fadeDuration: 250,
})
handleForm('.calling-form')
initApartmentSlider();

