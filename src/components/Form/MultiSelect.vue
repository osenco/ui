<template>
  <select
    class="form-control"
    :class="{ 'form-control-lg': sm, 'form-control-lg': lg }"
    :name="name"
    :id="`select-multi-${name || id}`"
    :value="value"
    v-bind="{
      ...$attrs,
      onChange: updateValue(value, $event),
    }"
    multiple
  >
    <option
      v-for="(option, id) in options"
      :key="id"
      :value="option.id || option.value || id"
      :selected="
        modelValue.includes(option.id) ||
        modelValue.includes(option.value) ||
        modelValue.includes(option) ||
        modelValue.includes(id)
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
    value: {
      type: [String, Number],
      required: true,
    },
  },

  setup(props, { emit }) {
    const selected: [] = ref(props.modelValue)

    function updateValue(v: any, e: Event) {
      const exists = selected.value.indexOf(v)

      if (e.target.checked) {
        if (exists === -1) {
          selected.value.push(v)
        }
      } else {
        if (exists !== -1) {
          selected.value.splice(exists, 1)
        }
      }

      emit('update:modelValue', selected)
    }

    return {
      updateValue,
    }
  },
})
</script>
