import { App as Application } from 'vue';
import Modal from './Modal.vue';

import { registerComponent } from './../../utils/plugins/index';

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Modal);
  }
};

export default Plugin;

export { Modal };