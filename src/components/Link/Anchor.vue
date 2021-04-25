<template>
  <template v-if="type == 'router'">
      <router-link :to="to"
    :class="{
      'link-dark': dark,
      'link-light': light,
      'link-info': info,
      'link-warning': warning,
      'link-danger': danger,
      'link-success': success,
      'link-secondary': secondary,
    }"
  >
    <slot></slot>
  </router-link>

  </template>
  <template else>
      <a :href="to"
    :class="{
      'link-dark': dark,
      'link-light': light,
      'link-info': info,
      'link-warning': warning,
      'link-danger': danger,
      'link-success': success,
      'link-secondary': secondary,
    }"
  >
    <slot></slot>
  </a>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Anchor',
  props: {
    id: {
      default: new Date().getTime(),
    },
    dark: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: false,
    },
    info: {
      type: Boolean,
      default: false,
    },
    warning: {
      type: Boolean,
      default: false,
    },
    danger: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    to: {
        type: String
    },
    type: {
        type: String,
        default: 'anchor'
    }
  },
})
</script>
