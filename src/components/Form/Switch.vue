<template>
  <div class="form-check form-switch" :class="{ 'form-check-inline': inline }">
    <input
      class="form-check-input"
      type="checkbox"
      :checked="modelValue"
    :name="name"
      :id="`form-check-${id || name}`"
      v-bind="$attrs"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <label v-if="label" :class="labelClass" :for="`form-check-${id || name}`">
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
      default: new Date().getTime(),
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  },
})
</script>
