<template>
  <input
    :type="type"
    class="form-control"
    :class="{ 'form-control-lg': sm, 'form-control-lg': lg }"
    :name="name"
    :id="`form-${id || name}`"
  />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    sm: {
      type: Boolean,
      default: false,
    },
    lg: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
    id: {
      type: String,
    },
    password: {
      type: Boolean,
      default: false,
    },
    tel: {
      type: Boolean,
      default: false,
    },
    email: {
      type: Boolean,
      default: false,
    },
    number: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const type = computed(() => {
      return props.tel
        ? 'tel'
        : props.email
        ? 'email'
        : props.password
        ? 'password'
        : props.number
        ? 'number'
        : 'text'
    })

    return { type }
  },
})
</script>