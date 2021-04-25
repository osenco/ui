<template>
  <select
    :type="type"
    class="form-control"
    :class="{ 'form-control-lg': sm, 'form-control-lg': lg }"
    :name="name"
    :id="`form-check-${id || name}`"
    :value="modelValue"
    v-bind="{
      ...$attrs,
      onChange: ($event) => { $emit('update:modelValue', $event.target.value) }
    }"
  >
    <option v-for="option in options" :key="option.id" :value="option.id" :selected="option.id == modelValue">
        {{ option.name }}
    </option>
  </select>
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
      default: new Date().getTime(),
    },
    options: {
      type: Array,
      required: true
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  },

  setup(props, {emit}) {
    const type = computed(() => {
      return props.tel
        ? 'tel'
        : props.email
        ? 'email'
        : props.password
        ? 'password'
        : props.number
        ? 'number'
        : 'text'
    })

    return { type }
  },
})
</script>