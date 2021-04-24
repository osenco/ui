<template>
  <div class="form-check" :class="{ 'form-check-inline': inline }">
    <input
      class="form-check-input"
      type="radio"
      value=""
      id="flexCheckDefault"
      v-bind="$attrs"
    />
    <label class="form-check-label" for="flexCheckDefault">
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
      default: 'form-label',
    },
  },
})
</script>