import { App as Application } from 'vue';
import ListGroup from './ListGroup.vue';
import ListItem from './ListGroup.vue';

import { registerComponent } from './../../utils/plugins/index';

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, ListGroup);
    registerComponent(vue, ListItem);
  }
};

export default Plugin;

export { ListGroup, ListItem };