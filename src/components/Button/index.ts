import { App as Application } from 'vue';
import Btn from './Btn.vue';

import { registerComponent } from './../../utils/plugins/index';

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Btn);
  }
};

export default Plugin;

export { Btn };