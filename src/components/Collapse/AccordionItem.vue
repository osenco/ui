<template>
  <div class="accordion-item">
    <h2 class="accordion-header" :id="`heading-${id}`">
      <button
        class="accordion-button"
        data-bs-toggle="collapse"
        :data-bs-target="`#accordion-collapse-${id}`"
        aria-expanded="true"
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
      default: new Date().getTime(),
    },
    title: {
      type: String,
    },
    id: {
      default: new Date().getTime(),
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
