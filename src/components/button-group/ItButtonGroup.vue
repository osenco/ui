<template>
  <div
    class="primary-btn-group"
    :class="
      vertical ? 'primary-btn-group--vertical' : 'primary-btn-group--horizontal'
    "
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'primary-btn-group',
  props: {
    vertical: { type: Boolean },
  },
})
</script>
