<template>
  <slot name="toggle">
    <btn
      light
      data-bs-toggle="offcanvas"
      :data-bs-target="`#off-canvas-${id}`"
      :aria-controls="`off-canvas-${id}`"
    >
      <icon name="list" size="2x" />
    </btn>
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
        <btn close dark data-bs-dismiss="offcanvas" aria-label="Close"></btn>
      </slot>
    </div>

    <div class="offcanvas-body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Icon from '../Icon/Icon.vue'
import Btn from '../Button/Btn.vue'

export default defineComponent({
  components: {
    Icon,
    Btn,
  },
  props: {
    id: {
      type: [String, Number],
      default: Math.random().toString(36).substring(2, 9),
    },
    title: {
      type: String,
      default: 'NavBar',
    },
  },
})
</script>