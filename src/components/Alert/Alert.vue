<template>
  <div
    class="alert"
    :class="{
      'alert-dark': dark,
      'alert-light': light,
      'alert-info': info,
      'alert-warning': warning,
      'alert-danger': danger,
      'alert-success': success,
      'alert-secondary': secondary,
    }"
    role="alert"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: false,
    },
    info: {
      type: Boolean,
      default: false,
    },
    warning: {
      type: Boolean,
      default: false,
    },
    danger: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
