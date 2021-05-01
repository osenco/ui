<template>
  <input
    type="color"
    class="form-control form-control-color"
    :class="{ 'form-control-sm': sm, 'form-control-lg': lg }"
    :title="title"
    :name="name"
    :id="`${type}-${name}-${id}`"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'FormColor',
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
    title: {
      type: String,
      default: 'Choose your color',
    },
    id: {
      type: String,
      default: Math.random().toString(36).substring(2, 9),
    },
    modelValue: {
      type: [String, Number],
      default: '#eee',
    },
    feedback: {
      type: Object,
    },
    prompt: {
      type: [Boolean, String],
      default: false,
    },
  },
})
</script>