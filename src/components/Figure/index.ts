import { App as Application } from 'vue';
import Figure from './Figure.vue';

import { registerComponent } from './../../utils/plugins/index';

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Figure);
  }
};

export default Plugin;

export { Figure };