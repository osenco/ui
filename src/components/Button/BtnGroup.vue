<template>
  <div class="btn-group" role="group" aria-label="Basic example">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonGroup',
})
</script>
