<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
      v-for="(item, i) in items"
      :key="item"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        :data-bs-slide-to="i"
        class="active"
        aria-current="true"
        :aria-label="`Slide ${i}`"
      ></button>
    </div>
    <div class="carousel-inner">
      <slot></slot>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Carousel',
  props: {
    title: {
      type: String,
    },
    items: {
      type: [Object, Array]
    }
  },
})
</script>