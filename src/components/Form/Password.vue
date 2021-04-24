<template>
  <input
    type="password"
    class="form-control"
    :class="{ 'form-control-lg': sm, 'form-control-lg': lg }"
    :name="name"
    :id="`form-${id || name}`"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    sm: {
      type: Boolean,
      default: false,
    },
    lg: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
    id: {
      type: String,
    },
  },
})
</script>