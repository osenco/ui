<template>
  <div class="toast-container position-absolute" :class="classes">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'ToastContainer',
  props: {
    top: {
      type: [Number, String],
      default: 0,
    },
    bottom: {
      type: [Number, String],
      default: 0,
    },
    start: {
      type: [Number, String],
      default: 0,
    },
    end: {
      type: [Number, String],
      default: 0,
    },
  },

  setup(props) {
    const classes = computed(() => {
      const c = ['p-3']

      if (props.top) {
        c.push(`top-${props.top}`)
      }

      if (props.bottom) {
        c.push(`bottom-${props.bottom}`)
      }

      if (props.start) {
        c.push(`top-${props.start}`)
      }

      if (props.end) {
        c.push(`end-${props.end}`)
      }

      return c.join(' ')
    })

    return { classes }
  },
})
</script>
