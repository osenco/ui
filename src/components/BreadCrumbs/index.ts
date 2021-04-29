import { App as Application } from 'vue';
import BreadCrumbs from './BreadCrumbs.vue';

import { registerComponent } from './../../utils/plugins/index';

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, BreadCrumbs);
  }
};

export default Plugin;

export { BreadCrumbs };