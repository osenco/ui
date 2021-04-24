<template>
  <input
    :type="type"
    class="btn-check"
    id="btn-check"
    autocomplete="off"
    v-bind="$attrs"
  />
  <label
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
    for="btn-check"
  >
    {{ label }}
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    inline: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
    },
    type: {
      type: String,
      default: 'checkbox',
    },
    labelClass: {
      type: String,
      default: 'form-label',
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