<template>
  <slot name="toggle">
    <button
      v-bind="$attrs"
      data-bs-toggle="collapse"
      :data-bs-target="`#collapse-${id}`"
    >
      {{ toggleText }}
    </button>
  </slot>

  <div :id="`collapse-${id}`" class="collapse" :class="{ show: active }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Collapse',
  props: {
    toggleText: {
      type: String,
      default: 'Toggle',
    },
    toggleClass: {
      type: String,
      default: 'btn btn-toggle',
    },
    id: {
      default: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
