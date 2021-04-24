<template>
  <div
    class="tab-pane fade show"
    :class="{ active: active }"
    role="tabpanel"
    :aria-labelledby="`tab-${id}`"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    id: {
      type: String,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
})
</script>