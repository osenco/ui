<template>
  <div class="form-group">
    <label :class="labelClass">
      {{ label }}
    </label>
    <div class="input-group" v-bind="$attrs">
      <span class="input-group-text" id="basic-addon3" v-if="append">
        {{ append }}
      </span>
      <slot></slot>
      <span class="input-group-text" id="basic-addon3" v-if="prepend">
        {{ prepend }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
    append: {
      type: String,
    },
    prepend: {
      type: String,
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
