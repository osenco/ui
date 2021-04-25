<template>
  <div :class="{
      `col`: auto,
      `col-xs-${xsm}`: xs,
      `col-sm-${sm}`: sm,
      `col-md-${md}`: md,
      `col-lg-${lg}`: lg,
      `col-xl-${xl}`: xl,
      `col-xxl-${xxl}`: xxl,
  }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Column',
    props: {
        auto: {
            type: Boolean,
            default: false
        },
        xs: {
            type: Number
        },
        sm: {
            type: Number
        },
        md: {
            type: Number
        },
        lg: {
            type: Number
        },
        xl: {
            type: Number
        },
        xxl: {
            type: Number
        }
    }
})
</script>
