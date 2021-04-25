import { App as Application } from "vue";
import Progress from "./Progress.vue";

import { registerComponent } from "./../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Progress);
  }
};

export default Plugin;

export { Progress };