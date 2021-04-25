import { App as Application } from "vue";
import Collapse from "./Collapse.vue";
import Accordion from "./Accordion.vue";
import AccordionItem from "./AccordionItem.vue";

import { registerComponent } from "./../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Collapse);
    registerComponent(vue, Accordion);
    registerComponent(vue, AccordionItem);
  }
};

export default Plugin;

export { Accordion, AccordionItem, Collapse };