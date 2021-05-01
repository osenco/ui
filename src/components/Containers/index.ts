import { App as Application } from 'vue';
import Container from './Container.vue';
import Wrap from './Wrap.vue'

import { registerComponent } from './../../utils/plugins/index';

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Container);
    registerComponent(vue, Wrap);
  }
};

export default Plugin;

export { Container, Wrap };