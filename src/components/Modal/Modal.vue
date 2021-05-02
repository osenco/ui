<template>
  <slot name="toggle">
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      :id="`modal-toggle-${id}`"
      :data-bs-target="`#modal-${id}`"
    >
      {{ toggleText || title }}
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
        'modal-fullscreen': fullscreen,
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
import { defineComponent, onMounted } from 'vue'
import { Modal } from 'bootstrap'

export default defineComponent({
  props: {
    toggleText: {
      type: String,
    },
    toggleClass: {
      type: String,
      default: 'btn btn-toggle',
    },
    backdrop: {
      type: [String, Boolean],
      default: true,
    },
    keyboard: {
      type: Boolean,
      default: true,
    },
    focus: {
      type: Boolean,
      default: true,
    },
    fullscreen: {
      type: Boolean,
      default: false,
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
  },

  emits: ['show', 'shown', 'hide', 'hidden', 'hidePrevented'],

  setup(props, emit) {
    onMounted(() => {
      const modal = new Modal(document.getElementById(`modal-${props.id}`), {
        keyboard: props.keyboard,
        focus: props.focus,
        backdrop: props.backdrop,
      })

      // const modalToggle = document.getElementById(`modal-toggle-${props.id}`) // relatedTarget
      // modal.show(modalToggle)

      // const modalEl = document.getElementById(props.id)
      // modalEl?.addEventListener('show.bs.modal', function (event) {
      //   emit('show')
      // })
      // modalEl?.addEventListener('shown.bs.modal', function (event) {
      //   emit('shown')
      // })
      // modalEl?.addEventListener('hide.bs.modal', function (event) {
      //   emit('hide')
      // })
      // modalEl?.addEventListener('hidden.bs.modal', function (event) {
      //   emit('hidden')
      // })
    })
  },
})
</script>
