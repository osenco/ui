import { App as Application } from "vue";
import FormGroup from "./FormGroup.vue";
import FormFloating from "./FormFloating.vue";

import { registerComponent } from "./../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, FormGroup);
    registerComponent(vue, FormFloating);
  }
};

export default Plugin;

export { FormGroup, FormFloating };