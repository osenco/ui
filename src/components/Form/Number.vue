<template>
  <input
    type="number"
    class="form-control"
    :class="{ 'form-control-lg': sm, 'form-control-lg': lg }"
    :name="name"
    :id="`${name || id}`"
    :min="min"
    :max="max"
    :step="step"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

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
    min: {
      type: Number,
      default: 0,
    },
    step: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 100,
    },
    modelValue: {
      type: Number,
      default: 0
  },
})
</script>