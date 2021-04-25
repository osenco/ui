import { App as Application } from "vue";
import FormWrap from "./FormWrap.vue";
import FormGroup from "./FormGroup.vue";
import FormFloating from "./FormFloating.vue";

import FormInput from "./Input.vue";
import NumberInput from "./Input.vue";

import { registerComponent } from "./../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, FormWrap);
    registerComponent(vue, FormGroup);
    registerComponent(vue, FormFloating);

    registerComponent(vue, FormInput);
    registerComponent(vue, NumberInput);
  }
};

export default Plugin;

export { FormWrap, FormGroup, FormFloating, FormInput, NumberInput };