<template>
  <slot name="toggle">
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      :data-bs-target="`#${id}Label`"
    >
      Open Modal
    </button>
  </slot>

  <div
    class="modal fade"
    :class="{ show: active }"
    :id="`${id}Label`"
    :data-bs-backdrop="backdrop"
    tabindex="-1"
    aria-labelledby="`${id}Label`"
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
          <h5 class="modal-title" :id="`${id}Label`">New message</h5>
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
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Send message</button>
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
    id: {
      default: new Date().getTime(),
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
