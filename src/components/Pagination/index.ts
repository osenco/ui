import { App as Application } from "vue";
import Paginate from "./Paginate.vue";

import { registerComponent } from "./../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Paginate);
  }
};

export default Plugin;

export { Paginate };