import { App as Application } from 'vue';
import Nav from './Nav.vue';
import Navbar from './Navbar.vue';
import Tabs from './Tabs/Tabs.vue';
import TabItem from './Tabs/TabItem.vue';

import { registerComponent } from './../../utils/plugins/index';

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Nav);
    registerComponent(vue, Navbar);
    registerComponent(vue, Tabs);
    registerComponent(vue, TabItem);
  }
};

export default Plugin;

export { Nav };
