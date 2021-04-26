<template>
  <bootstrap-icon :icon="name" :size="size" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons'

export default defineComponent({
  components: {
    BootstrapIcon,
  },
  props: {
    name: {
      type: String,
    },
    sm: {
      type: Boolean,
      default: false,
    },
    md: {
      type: Boolean,
      default: false,
    },
    x2: {
      type: Boolean,
      default: false,
    },
    x3: {
      type: Boolean,
      default: false,
    },
    x4: {
      type: Boolean,
      default: false,
    },
    x5: {
      type: Boolean,
      default: false,
    },
    success: {
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
    info: {
      type: Boolean,
      default: false,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: false,
    },
    cylon: {
      type: Boolean,
      default: false,
    },
    cyclonv: {
      type: Boolean,
      default: false,
    },
    fade: {
      type: Boolean,
      default: false,
    },
    spin: {
      type: Boolean,
      default: false,
    },
    spinr: {
      type: Boolean,
      default: false,
    },
    spinp: {
      type: Boolean,
      default: false,
    },
    spinrp: {
      type: Boolean,
      default: false,
    },
    throb: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const size = computed(() =>
      props.sm
        ? 'sm'
        : props.md
        ? 'md'
        : props.x2
        ? '2x'
        : props.x3
        ? '3x'
        : props.x4
        ? '4x'
        : props.x5
        ? '5x'
        : '1x',
    )
    const variant = computed(() =>
      props.success
        ? 'success'
        : props.warning
        ? 'warning'
        : props.danger
        ? 'danger'
        : props.info
        ? 'info'
        : props.primary
        ? 'primary'
        : props.secondary
        ? 'secondary'
        : props.dark
        ? 'dark'
        : props.light
        ? 'light'
        : 'white',
    )

    const animation = computed(() =>
      props.cylon
        ? 'cyclon'
        : props.cyclonv
        ? 'cylon-vertical'
        : props.fade
        ? 'fade'
        : props.spin
        ? 'spin'
        : props.spinr
        ? 'spin-reverse'
        : props.spinp
        ? 'spin-pulse'
        : props.spinrp
        ? 'spin-reverse-pulse'
        : props.throb
        ? 'throb'
        : 'none',
    )

    return { size, variant, animation }
  },
})
</script>
