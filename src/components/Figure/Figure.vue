<template>
  <figure class="figure">
    <img :src="image" class="figure-img img-fluid rounded" v-bind="$attrs" :alt="title" />
    <figcaption class="figure-caption">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Figure',
  props: {
    title: {
      type: String,
      default: 'Image'
    },
    caption: {
      type: String,
    },
    image: {
      type: String,
    },
  },
})
</script>