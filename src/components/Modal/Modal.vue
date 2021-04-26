<template>
  <slot name="toggle">
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      :data-bs-target="`#modal-${id}`"
    >
            {{ title }}
    </button>
  </slot>

  <div
    class="modal fade"
    :class="{ show: active }"
    :id="`modal-${id}`"
    :data-bs-backdrop="backdrop"
    tabindex="-1"
    :aria-labelledby="`modal-${id}-label`"
    aria-hidden="true"
  >
    <div
      class="modal-dialog"
      :class="{
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
  },
})
</script>
