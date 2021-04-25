<template>
  <div class="user-card">
    <div class="user-avatar bg-primary">
      <img :src="image" :alt="name" />
    </div>
    <div class="user-info">
      <span class="lead-text">{{ name }} </span>
      <span class="sub-text">
        {{ desc }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
    },
    desc: {
      type: String,
    },
    image: {
      type: String,
    },
  },
})
</script>