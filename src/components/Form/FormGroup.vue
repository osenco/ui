<template>
  <div class="form-group">
    <label v-if="label" :class="labelClass">
      {{ label }}
    </label>
    <form-input v-if="input" v-bind="$attrs" />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormInput from './Input.vue'

export default defineComponent({
  name: 'FormGroup',
  inheritAttrs: false,
  components: {
    FormInput,
  },
  props: {
    input: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
    },
    labelClass: {
      type: String,
      default: 'form-label',
    },
  },
})
</script>
