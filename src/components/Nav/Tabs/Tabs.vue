<template>
  <ul class="nav nav-tabs" :id="`tabs-${id}`" role="tablist">
    <li class="nav-item" v-for="(tab, id) in tabs" :key="id">
      <a
        class="nav-link"
        :class="{ active: id == active }"
        aria-current="page"
        :href="`#${tab}`"
        :id="`tab-${tab}`"
        role="tab"
        :aria-controls="tab"
        aria-selected="true"
      >
        {{ tab }}
      </a>
    </li>
  </ul>
  <div class="tab-content" :id="`tabs-${id}Content`">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    id: {
      type: String,
      default: new Date().getTime(),
    },
    tabs: {
      type: Object,
    },
    active: {
      default: '',
    },
  },
})
</script>
