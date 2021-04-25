<template>
    <radio v-for="option in options" :key="option"
      :name="name"
      :label="option.name"
      :label-class="labelClass"
      :value="option.value"
      :modelValue="modelValue"
      @update="$emit('update:modelValue', $event)"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Radio from "./Radio.vue"

export default defineComponent({
    components: [Radio],
    props: {
    inline: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
    },
    labelClass: {
      type: String,
      default: 'form-check-label',
    },
    modelValue: {
      type: [String, Number],
      required: true
    },
    options: {
      type: Array,
      required: true
    },
  },
})
</script>
