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
      default: new Date().getTime(),
    }
  },
})
</script>