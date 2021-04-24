import { App as Application } from "vue";
import Container from "./Container.vue";

import { registerComponent } from "./../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Container);
  }
};

export default Plugin;

export { Container };