<template>
  <form role="search" name="search-form">
    <input
      class="form-control"
      :class="{ 'form-control-lg': sm, 'form-control-lg': lg }"
      :autocomplete="autocomplete"
      :name="name"
      :id="`${id}`"
      v-model="term"
      v-bind="$attrs"
      @change="searchTerm"
    />
  </form>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    autofill: {
      type: String,
      default: 'on',
    },
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
      default: 'search',
    },
    id: {
      type: String,
      default: Math.random().toString(36).substring(2, 9),
    },
  },
  emits: ['search'],
  setup(props, { emit }) {
    const term = ref('')

    const autocomplete = computed(() => {
      return props.autofill !== 'off' ? props.name : 'off'
    })

    function searchTerm() {
      emit('search', term.value)
    }

    return {
      term,
      searchTerm,
      autocomplete,
    }
  },
})
</script>
