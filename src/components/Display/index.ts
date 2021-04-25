import { App as Application } from "vue";
import HidePrint from "./HidePrint.vue";

import { registerComponent } from "./../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, HidePrint);
  }
};

export default Plugin;

export { HidePrint };