<template>
  <template v-if="span">
    <span
      class="spinner"
      :class="{
        'text-dark': dark,
        'text-light': light,
        'text-info': info,
        'text-warning': warning,
        'text-danger': danger,
        'text-success': success,
        'text-secondary': secondary,
        'spinner-border': border,
        'spinner-border-sm': border && sm,
        'spinner-border-lg': border && lg,
        'spinner-grow': grow,
        'spinner-grow-sm': grow && sm,
        'spinner-grow-lg': grow && lg,
      }"
      role="status"
    >
      <span class="visually-hidden"> <slot>Loading...</slot></span>
    </span>
  </template>
  <template v-else>
    <div
      class="spinner"
      :class="{
        'text-dark': dark,
        'text-light': light,
        'text-info': info,
        'text-warning': warning,
        'text-danger': danger,
        'text-success': success,
        'text-secondary': secondary,
        'spinner-border': border,
        'spinner-border-sm': border && sm,
        'spinner-border-lg': border && lg,
        'spinner-grow': grow,
        'spinner-grow-sm': grow && sm,
        'spinner-grow-lg': grow && lg,
      }"
      role="status"
    >
      <span class="visually-hidden"> <slot>Loading...</slot></span>
    </div>
  </template>
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
    border: {
      type: Boolean,
      default: true,
    },
    grow: {
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
    span: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
