<template>
  <div :class="{ container: !fluid, 'container-fluid': fluid }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
