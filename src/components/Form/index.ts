import { App as Application } from "vue";
import FormGroup from "./FormGroup.vue";

import { registerComponent } from "./../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, FormGroup);
  }
};

export default Plugin;

export { FormGroup };