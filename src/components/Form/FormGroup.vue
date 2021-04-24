<template>
  <div class="form-group">
    <label :class="labelClass">
      {{ label }}
    </label>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
    },
    labelClass: {
      type: String,
      default: 'form-label',
    },
  },
})
</script>
