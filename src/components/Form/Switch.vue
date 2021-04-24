<template>
  <div class="form-check form-switch" :class="{ 'form-check-inline': inline }">
    <input
      class="form-check-input"
      type="checkbox"
      id="flexSwitchCheckDefault"
      v-bind="$attrs"
    />
    <label class="form-check-label" for="flexSwitchCheckDefault">
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