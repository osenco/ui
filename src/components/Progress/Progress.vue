<template>
  <div class="progress">
    <div
      class="progress-bar"
      :class="{
        'bg-primary': primary,
        'bg-dark': dark,
        'bg-light': light,
        'bg-info': info,
        'bg-warning': warning,
        'bg-danger': danger,
        'bg-success': success,
        'bg-secondary': secondary,
        'progress-bar-striped': striped,
        'progress-bar-animated': animate,
      }"
      role="progressbar"
      :aria-valuenow="now"
      :aria-valuemin="min"
      :aria-valuemax="max"
      :style="`width:${width}%;`"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    min: {
      type: [Number, String],
      default: 0,
    },
    now: {
      type: [Number, String],
      default: 0,
    },
    max: {
      type: [Number, String],
      default: 100,
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
    striped: {
      type: Boolean,
      default: false,
    },
    animate: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const width = computed(() => {
      return (Number(props.now) / Number(props.max)) * 100
    })

    return { width }
  },
})
</script>
