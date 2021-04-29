import { App as Application } from 'vue';
import ADropdown from './ADropdown.vue';

import { registerComponent } from './../../utils/plugins/index';

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, ADropdown);
  }
};

export default Plugin;

export { ADropdown };