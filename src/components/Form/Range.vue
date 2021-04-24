<template>
  <label for="customRange3" class="form-label">
    {{ label }}
  </label>
  <input
    type="range"
    class="form-range"
    :min="min"
    :max="max"
    :step="step"
    id="customRange3"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    min: {
      type: Number,
      default: 0,
    },
    now: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: String,
      default: '0.1',
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
