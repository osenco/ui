<template>
  <div class="form-check form-switch" :class="{ 'form-check-inline': inline }">
    <input
      class="form-check-input"
      type="checkbox"
      :checked="modelValue"
      :name="name || id"
      :id="`switch-${name || id}`"
      v-bind="$attrs"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <label v-if="label" :class="labelClass" :for="`switch-${name || id}`">
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    inline: {
      type: Boolean,
      default: false,
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
