<template>
  <div class="form-check" :class="{ 'form-check-inline': inline }">
    <input
      class="form-check-input"
      type="radio"
      :checked="value === modelValue"
      :value="value"
      :name="name || id"
      :id="`radio-${id || name}`"
      v-bind="$attrs"
      @change="$emit('update:modelValue', value)"
    />
    <label v-if="label" :class="labelClass" :for="`radio-${id || name}`">
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FormRadio',
  props: {
    inline: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
    label: {
      type: String,
    },
    labelClass: {
      type: String,
      default: 'form-check-label',
    },
    id: {
      default: Math.random().toString(36).substring(2, 9),
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },
})
</script>
