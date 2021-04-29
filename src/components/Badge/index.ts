import { App as Application } from 'vue';
import Badge from './Badge.vue';

import { registerComponent } from './../../utils/plugins/index';

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Badge);
  }
};

export default Plugin;

export { Badge };