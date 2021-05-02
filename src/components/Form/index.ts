import { App as Application } from 'vue';
import FormWrap from './Wrap.vue';
import FormGroup from './FormGroup.vue';
import FormFloating from './FormFloating.vue';

import FormInput from './Input.vue';
import FormInputGroup from './InputGroup.vue';
import FormCheck from './Checkbox.vue';
import FormSelect from './Select.vue';
import FormMultiSelect from './MultiSelect.vue';
import NumberInput from './Input.vue';

import { registerComponent } from './../../utils/plugins/index';

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, FormWrap);
    registerComponent(vue, FormGroup);
    registerComponent(vue, FormFloating);

    registerComponent(vue, FormInput);
    registerComponent(vue, FormInputGroup);
    registerComponent(vue, FormCheck);
    registerComponent(vue, FormSelect);
    registerComponent(vue, FormMultiSelect);
    registerComponent(vue, NumberInput);
  }
};

export default Plugin;

export { FormWrap, FormGroup, FormFloating, FormInput, FormInputGroup, FormCheck, FormSelect, FormMultiSelect, NumberInput };