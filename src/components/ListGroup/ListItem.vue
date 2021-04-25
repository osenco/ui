<template>
    <li 
    class="list-group-item"
    :class="{active: active}"
    >
      <slot></slot>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    active: {
      type: Boolean,
      default: false
    },
  },
})
</script>
