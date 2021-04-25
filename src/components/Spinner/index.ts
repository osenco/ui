import { App as Application } from "vue";
import Spinner from "./Spinner.vue";

import { registerComponent } from "./../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Spinner);
  }
};

export default Plugin;

export { Spinner };