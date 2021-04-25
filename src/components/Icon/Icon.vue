<template>
    <BootstrapIcon
    :icon="name"
    :size="size"
    :variant="variant"
    :animation="animation"
    />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import BootstrapIcon from '@dvuckovic/vue-bootstrap-icons';

export default defineComponent({
    components: {
        BootstrapIcon,
    },
    props: {
        name: {
            type: String
        },
        size: {
            type: String,
            default: '2x'
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
cylonv: {
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
    }
    },
    setup(props) {
        const variant = computed(() => props.success ? 'success':
props.warning ? 'warning':
props.danger ? 'danger':
props.info ? 'info':
props.primary ? 'primary':
props.secondary ? 'secondary':
props.dark ? 'dark' :
props.light ? 'light' : '')

const animation = computed(() => props.cylon ? 'cyclon' :
props.cyclonv ? 'cylon-vertical' :
props.fade?'fade':
props.spin?'spin' :
props.spinr? 'spin-reverse':
props.spinp ? 'spin-pulse' :
props.spinrp? 'spin-reverse-pulse':
props.throb? 'throb' : 'false')

return {variant, animation}
    }
})
</script>
