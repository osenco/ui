import { App as Application } from 'vue';
import Carousel from './Carousel.vue';
import CarouselItem from './Carousel.vue';

import { registerComponent } from './../../utils/plugins/index';

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Carousel);
    registerComponent(vue, CarouselItem);
  }
};

export default Plugin;

export { Carousel, CarouselItem };