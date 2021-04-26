<template>
  <div class="accordion-item">
    <h2 class="accordion-header" :id="`heading-${id}`">
      <button
        class="accordion-button"
        data-bs-toggle="collapse"
        :data-bs-target="`#accordion-collapse-${id}`"
        :aria-expanded="active"
        :aria-controls="`accordion-collapse-${id}`"
        v-bind="$attrs"
      >
        {{ title }}
      </button>
    </h2>

    <div
      :id="`accordion-collapse-${id}`"
      class="accordion-collapse collapse"
      :class="{ show: active }"
      :aria-labelledby="`heading-${id}`"
      :data-bs-parent="`#accordion-${parent}`"
    >
      <div class="accordion-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AccordionItem',
  props: {
    parent: {
      default: Math.random().toString(36).substring(2, 9),
      required: true
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
  },
})
</script>
