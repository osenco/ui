import { App as Application } from 'vue';
import Ui from './Ui.vue';

import { registerComponent } from './../../utils/plugins/index';

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Ui);
  }
};

export default Plugin;

export { Ui };