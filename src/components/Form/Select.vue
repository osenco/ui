<template>
  <select
    class="form-control"
    :class="{ 'form-control-lg': sm, 'form-control-lg': lg }"
    :name="name"
    :id="`select-${name || id}`"
    :value="modelValue"
    v-bind="{
      ...$attrs,
      onChange: ($event) => {
        $emit('update:modelValue', $event.target.value)
      },
    }"
  >
    <option
      v-for="(option, id) in options"
      :key="id"
      :value="option.id || option.value || id"
      :selected="
        option.id == modelValue ||
        option.value == modelValue ||
        id == modelValue
      "
    >
      {{ option.name || option.title || option.label || option }}
    </option>
  </select>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'FormSelect',
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
      default: Math.random().toString(36).substring(2, 9),
    },
    options: {
      type: [Array, Object],
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
})
</script>