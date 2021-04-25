import { App as Application } from "vue";
import Icon from "./Icon.vue";

import { registerComponent } from "./../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Icon);
  }
};

export default Plugin;

export { Icon };