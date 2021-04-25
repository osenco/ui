<template>
  <ul class="list-group list-group-flush" :id="`list-group-${id}`">
      <slot></slot>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    id: {
      type: String,
      default: new Date().getTime(),
    },
  },
})
</script>
