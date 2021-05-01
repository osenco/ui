<template>
  <div class="form-check" :class="{ 'form-check-inline': inline }">
    <input
      class="form-check-input"
      type="checkbox"
      :checked="modelValue.includes(value)"
      :name="name || id"
      :id="`check-multi-${name || id}`"
      v-bind="$attrs"
      :value="value"
      @change="updateValue(value, $event)"
    />
    <label v-if="label" :class="labelClass" :for="`check-multi-${name || id}`">
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'FormCheckMulti',
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
