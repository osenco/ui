<template>
  <div class="accordion" :id="`accordion-${id}`">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Accordion',
  props: {
    id: {
      default: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    }
  },
})
</script>