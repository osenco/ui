<template>
  <div class="progress">
    <div
      class="progress-bar"
      :class="{
        'bg-dark': dark,
        'bg-light': light,
        'bg-info': info,
        'bg-warning': warning,
        'bg-danger': danger,
        'bg-success': success,
        'bg-secondary': secondary,
        'progress-bar-striped': striped,
        'progress-bar-animated': animated,
      }"
      role="progressbar"
      aria-valuenow="now"
      aria-valuemin="min"
      aria-valuemax="max"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    min: {
      type: Number,
      default: 0,
    },
    now: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
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
    striped: {
      type: Boolean,
      default: false,
    },
    animated: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
