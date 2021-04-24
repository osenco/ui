<template>
  <nav
    aria-label="breadcrumb"
    :style="`--bs-breadcrumb-divider: '${divider}';`"
  >
    <ol class="breadcrumb">
      <li
        v-for="(link, id) in links"
        :key="id"
        class="breadcrumb-item"
        :class="{ active: active == id }"
        :aria-current="active == id ? 'page' : false"
      >
        {{ link }}
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    divider: {
      type: String,
      default: '>',
    },

    active: {
      type: String,
      default: 'home',
    },

    links: {
      type: Object,
    },
  },
})
</script>
