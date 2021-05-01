<template>
  <slot name="toggle">
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      :data-bs-target="`#modal-${id}`"
    >
      {{ toggleText }}
    </button>
  </slot>

  <div
    :id="`modal-${id}`"
    class="modal fade"
    :class="{ show: active }"
    :data-bs-backdrop="backdrop"
    tabindex="-1"
    :aria-labelledby="`modal-${id}-label`"
    aria-hidden="true"
  >
    <div
      class="modal-dialog"
      :class="{
        'modal-sm': sm,
        'modal-lg': lg,
        'modal-xl': xl,
        'modal-fullscreen':fullscreen,
        'modal-dialog-centered': centered,
        'modal-dialog-scrollable': scrollable,
      }"
      v-bind="$attrs"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" :id="`modal-${id}-label`">
            {{ title }}
          </h5>
          <slot name="close">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </slot>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    toggleText: {
      type: String,
      default: 'Toggle',
    },
    toggleClass: {
      type: String,
      default: 'btn btn-toggle',
    },
    backdrop: {
      type: String,
      default: 'none',
    },
    title: {
      type: String,
    },
    id: {
      type: [Number, String],
      default: Math.random().toString(36).substring(2, 9),
    },
    active: {
      type: Boolean,
      default: false,
    },
    centered: {
      type: Boolean,
      default: false,
    },
    scrollable: {
      type: Boolean,
      default: false,
    },
    sm: {
      type: Boolean,
      default: false,
    },
    lg: {
      type: Boolean,
      default: false,
    },
    xl: {
      type: Boolean,
      default: false,
    },
    fullscreen: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
