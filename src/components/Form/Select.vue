<template>
  <multiselect
    :class="{ 'form-control-sm': sm, 'form-control-lg': lg }"
    :name="name"
    :id="`select-multi-${name || id}`"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Multiselect from '@vueform/multiselect'

export default defineComponent({
  name: 'FormSelect',
  components: { Multiselect },
  props: {
    name: {
      type: String,
    },
    id: {
      default: Math.random().toString(36).substring(2, 9),
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

<style src="@vueform/multiselect/themes/default.css"></style>
