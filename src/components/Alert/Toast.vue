<template>
  <div
    class="toast"
    :class="{
      'bg-dark': dark,
      'bg-light': light,
      'bg-info': info,
      'bg-warning': warning,
      'bg-danger': danger,
      'bg-success': success,
      'bg-secondary': secondary,
    }"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    :id="`toast-${id}`"
  >
    <div class="toast-header">
      <img v-if="img" :src="img" class="rounded me-2" :alt="title" />
      <strong class="me-auto">
        {{ title }}
      </strong>
      <small>{{ time }}</small>
      <slot name="close">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </slot>
    </div>
    <div class="toast-body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'Toast',
  emits: ['hidden'],
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
    title: {
      type: String,
      default: 'Notification',
    },
    img: {
      type: String
    },
    time: {
      type: String,
      default: 'a few seconds ago',
    },
  },

  setup(props, { emit }) {
    onMounted(() => {
      const toast = document.getElementById(`toast-${props.id}`)

      toast?.addEventListener('hidden.bs.toast', function () {
        emit('hidden')
      })
    })
  },
})
</script>
