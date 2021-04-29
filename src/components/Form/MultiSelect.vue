<template>
  <select
    ref="select"
    class="form-control"
    :class="{ 'form-control-lg': sm, 'form-control-lg': lg }"
    :name="name"
    :value="modelValue"
    :id="`select-multi-${name || id}`"
    v-bind="{
      ...$attrs,
      onChange: () => {
        $emit('update:modelValue', this.value)
      },
    }"
    multiple
  >
    <option
      v-for="(option, id) in options"
      :key="id"
      :value="
        option.id || option.value || typeof options === 'object' ? id : option
      "
      :selected="
        modelValue.includes(option.id) ||
        modelValue.includes(option.value) ||
        modelValue.includes(id) ||
        modelValue.includes(option)
      "
    >
      {{ option.name || option.title || option.label || option }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'FormSelectMulti',
  inheritAttrs: false,
  props: {
    name: {
      type: String,
    },
    id: {
      default: Math.random().toString(36).substring(2, 9),
    },
    modelValue: {
      type: Array,
    },
    options: {
      type: [Array, Object],
    },
    sm: {
      type: Boolean,
      default: false,
    },
    lg: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
