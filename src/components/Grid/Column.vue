<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'Column',

  props: {
    auto: {
      type: Boolean,
      default: false,
    },
    xs: {
      type: [Number, String],
    },
    sm: {
      type: [Number, String],
    },
    md: {
      type: [Number, String],
    },
    lg: {
      type: [Number, String],
    },
    xl: {
      type: [Number, String],
    },
    xxl: {
      type: [Number, String],
    },
  },

  setup(props) {
    const classes = computed(() => {
      const c: any = []
      if (props.auto) {
        c.push('col')
      }

      if (props.xs) {
        c.push(`col-xs-${props.xs}`)
      }
      if (props.sm) {
        c.push(`col-sm-${props.sm}`)
      }
      if (props.md) {
        c.push(`col-md-${props.md}`)
      }
      if (props.lg) {
        c.push(`col-lg-${props.lg}`)
      }
      if (props.xl) {
        c.push(`col-xl-${props.xl}`)
      }
      if (props.xxl) {
        c.push(`col-xxl-${props.xxl}`)
      }

      return c.join(' ')
    })

    return { classes }
  },
})
</script>
