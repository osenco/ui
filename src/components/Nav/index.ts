import { App as Application } from 'vue';
import Navigation from './Nav.vue';

import { registerComponent } from './../../utils/plugins/index';

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Navigation);
  }
};

export default Plugin;

export { Nav };