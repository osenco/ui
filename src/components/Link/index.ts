import { App as Application } from 'vue';
import Anchor from './Anchor.vue';

import { registerComponent } from './../../utils/plugins/index';

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Anchor);
  }
};

export default Plugin;

export { Anchor };