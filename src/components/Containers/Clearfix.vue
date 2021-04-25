<template>
    <div class="clearfix">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Clearfix'
})
</script>
