<template>
  <li
    class="dropdown-item"
    :class="[
      disabled && 'dropdown-item--disabled',
      divided && 'dropdown-item--divided',
    ]"
  >
    <it-icon v-if="icon" class="dropdown-icon" :name="icon"></it-icon>
    <span class="dropdown-text">
      <slot></slot>
    </span>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'dropdown-item',
  props: {
    disabled: Boolean,
    divided: Boolean,
    icon: String,
  },
})
</script>
