<template>
  <input
    :type="type"
    class="form-control"
    :class="{ 'form-control-lg': sm, 'form-control-lg': lg }"
    :autocomplete="autocomplete"
    :name="name"
    :id="`${name || id}`"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs"
  />
  <div class="valid-feedback" v-if="feedback?.valid">
    {{ feedback?.valid }}
  </div>
  <div class="invalid-feedback" v-if="feedback?.invalid">
    {{ feedback?.invalid }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'FormInput',
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
    modelValue: {
      type: [String, Number],
      default: '',
    },
    feedback: {
      type: Object,
    },
  },

  setup(props, { emit }) {
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

    const autocomplete = computed(() => {
      return props.autofill !== 'off' ? props.name : 'off'
    })

    return { type, autocomplete }
  },
})
</script>