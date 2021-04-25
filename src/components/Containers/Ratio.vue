<template>
    <div :class="`ratio ratio-${ratio}`">
<slot></slot>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        ratio: {
            type: String,
            default: 'ratio-16x9'
        }
    },
})
</script>
