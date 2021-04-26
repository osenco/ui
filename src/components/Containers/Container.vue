<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
    d: {
      type: [Number, String],
    },
    dSm: {
      type: [Number, String],
    },
    dMd: {
      type: [Number, String],
    },
    dLg: {
      type: [Number, String],
    },
    m: {
      type: [Number, String],
    },
    mx: {
      type: [Number, String],
    },
    my: {
      type: [Number, String],
    },
    p: {
      type: [Number, String],
    },
    px: {
      type: [Number, String],
    },
    py: {
      type: [Number, String],
    },
  },

  setup(props) {
    const classes = computed(() => {
      const c: any = []
      
      if (props.fluid) {
        c.push('container-fluid')
      } else{
        c.push('container')
      }

      if (props.d) {
        c.push(`d-${props.d}`)
      }

      if (props.p) {
        c.push(`p-${props.p}`)
      }

      if (props.px) {
        c.push(`px-${props.px}`)
      }

      if (props.py) {
        c.push(`py--${props.py}`)
      }

      if (props.m) {
        c.push(`m-${props.m}`)
      }

      if (props.mx) {
        c.push(`mx-${props.mx}`)
      }

      if (props.my) {
        c.push(`my--${props.my}`)
      }

      return c.join(' ')
    })

    return { classes }
  },
})
</script>
