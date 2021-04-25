<template>
  <div class="carousel-item active">
    <img v-if="image" :src="image" class="d-block w-100" :alt="title" />
    <div class="carousel-caption d-none d-md-block">
      <h5>
        {{ title }}
      </h5>
      <p>
        {{ caption}}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CarouselItem',
  props: {
    title: {
      type: String,
    },
    caption: {
      type: String,
    },
    image: {
      type: String
    }
  },
})
</script>