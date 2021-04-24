import { App as Application } from "vue";
import Collapse from "./Collapse.vue";

import { registerComponent } from "./../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Collapse);
  }
};

export default Plugin;

export { Collapse };