<template>
  <div class="form-check" :class="{ 'form-check-inline': inline }">
    <input
      class="form-check-input"
      type="checkbox"
      :checked="modelValue"
      :name="name || id"
      :id="`check-${name || id}`"
      v-bind="$attrs"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <label v-if="label" :class="labelClass" :for="`check-${name || id}`">
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FormCheck',
  inheritAttrs: false,
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
      type: Boolean,
      default: false
    }
  },
})
</script>
