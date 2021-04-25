<template>
    <slot name="toggle">
      <button
    class="btn btn-primary"
    type="button"
    data-bs-toggle="offcanvas"
    :data-bs-target="`#off-canvas-${id}`"
    :aria-controls="`off-canvas-${id}`"
  >
  Menu
  </button>
  </slot>

  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    :id="`off-canvas-${id}`"
   :aria-labelledby="`off-canvas-${id}-label`"
  >
    <div class="offcanvas-header">
      <slot name="header">
      <h5 class="offcanvas-title" :id="`off-canvas-${id}-label`">
        {{ title }}
      </h5>
      </slot>
      <slot name="close">
        <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
      </slot>
    </div>
    <div class="offcanvas-body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    id: {
      type: [String, Number],
      default: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    },
    title: {
      type: String,
      default: "NavBar",
    },
  },
})
</script>