<template>
  <button
    :type="type || 'button'"
    class="btn"
    :class="{
      'btn-primary': primary,
      'btn-dark': dark,
      'btn-light': light,
      'btn-info': info,
      'btn-warning': warning,
      'btn-danger': danger,
      'btn-success': success,
      'btn-secondary': secondary,
      'btn-link': link,
      'btn-sm': sm,
      'btn-lg': lg,
      'btn-block': block,
      'btn-round': round,
      'btn-icon': icon,
      'btn-float': float,
    }"
    @click="clicked"
  >
    <slot> Sumbit </slot>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'Button',
  
  emits: ['click'],

  props: {
    primary: {
      type: Boolean,
      default: false,
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
    link: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    lg: {
      type: Boolean,
      default: false,
    },
    sm: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    float: {
      type: Boolean,
      default: false,
    },
    submit: {
      type: Boolean,
      default: false,
    },
    reset: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    const type = computed(() => {
      return props.submit ? 'submit' : props.reset ? 'reset' : 'button'
    })

    function clicked() {
      emit('click')
    }

    return { type, clicked }
  },
})
</script>
