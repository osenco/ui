<template>
  <a
    class="btn"
    :class="{
      'btn-dark': dark,
      'btn-light': light,
      'btn-info': info,
      'btn-warning': warning,
      'btn-danger': danger,
      'btn-success': success,
      'btn-secondary': secondary,
      'btn-link': link,
      'btn-sm': sm,
      'btn-lg': lg,
    }"
    :href="link"
  >
    <slot></slot>
  </a>
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
    lg: {
      type: Boolean,
      default: false,
    },
    sm: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      default: '/',
    },
  },
})
</script>
