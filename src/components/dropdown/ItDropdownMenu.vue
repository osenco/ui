<template>
  <ul class="dropdown-menu">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'dropdown-menu',
})
</script>
