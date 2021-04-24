import { App as Application } from "vue";
import Row from "./Row.vue";

import { registerComponent } from "./../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Row);
  }
};

export default Plugin;

export { Row };