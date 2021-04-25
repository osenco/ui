import { App as Application } from "vue";
import Alert from "./Alert.vue";
import Toast from "./Toast.vue";

import { registerComponent } from "./../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Alert);
    registerComponent(vue, Toast);
  }
};

export default Plugin;

export { Alert, Toast };