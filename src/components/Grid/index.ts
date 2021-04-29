import { App as Application } from 'vue';
import Row from './Row.vue';
import Col from './Column.vue';

import { registerComponent } from './../../utils/plugins/index';

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Row);
    registerComponent(vue, Col);
  }
};

export default Plugin;

export { Row, Col };