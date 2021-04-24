<template>
  <button
    type="button"
    class="btn btn-outline"
    :class="{
      'btn-outline-dark': dark,
      'btn-outline-light': light,
      'btn-outline-info': info,
      'btn-outline-warning': warning,
      'btn-outline-danger': danger,
      'btn-outline-success': success,
      'btn-outline-secondary': secondary,
      'btn-outline-link': link,
      'btn-sm': sm,
      'btn-lg': lg,
    }"
  >
    <slot></slot>
  </button>
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
    link: {
      type: Boolean,
      default: false,
    },
    lg: {
      type: Boolean,
      default: false,
    },
    sm: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
