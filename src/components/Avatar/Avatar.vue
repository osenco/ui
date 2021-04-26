<template>
  <div class="user-card">
    <div class="user-avatar"
    :class="{
      'bg-dark': dark,
      'bg-light': light,
      'bg-info': info,
      'bg-warning': warning,
      'bg-danger': danger,
      'bg-success': success,
      'bg-secondary': secondary,
    }">
      <img :src="subject.avatar || subject.image || image" :alt="subject.name || name" />
    </div>
    <div class="user-info">
      <span class="lead-text">{{ subject.name || name }} </span>
      <span class="sub-text">
        {{ subject.caption || caption }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: false,
    },
    info: {
      type: Boolean,
      default: false,
    },
    warning: {
      type: Boolean,
      default: false,
    },
    danger: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
    caption: {
      type: String,
    },
    image: {
      type: String,
    },
    subject: {
      type: Object
    }
  },
})
</script>