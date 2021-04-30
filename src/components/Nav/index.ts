import { App as Application } from 'vue';
import Nav from './Nav.vue';

import { registerComponent } from './../../utils/plugins/index';

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Nav);
  }
};

export default Plugin;

export { Nav };
