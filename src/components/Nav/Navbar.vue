<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <slot name="toggle">
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <slot name="toggle">Menu</slot>
        </button>
      </slot>

      <slot name="brand">
        <a class="navbar-brand" href="/">
          <img
            src="../../assets/logo.png"
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          Osen UI
        </a>
      </slot>

      <div class="collapse navbar-collapse" id="navbarNav">
        <slot></slot>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
    }
  },
})
</script>