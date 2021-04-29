<template>
  <span
    class="badge"
    :class="{
      'bg-primary': primary,
      'bg-dark': dark,
      'bg-light': light,
      'bg-info': info,
      'bg-warning': warning,
      'bg-danger': danger,
      'bg-success': success,
      'bg-secondary': secondary,
    }"
  >
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Badge',
  props: {
    id: {
      default: Math.random().toString(36).substring(2, 9),
    },
    primary: {
      type: Boolean,
      default: false,
    },
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
