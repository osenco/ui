<template>
<input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color">
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'FormColor',
    props: {
        default: {
            type: String
        }
    }
})
</script>
