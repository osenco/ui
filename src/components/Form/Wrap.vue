<template>
    <form :autocomplete="autocomplete" :content-type="multipart ? `multipart/form-data`: 'form'" class="form" :class="{
        'needs-validation': validate
    }">
        <slot></slot>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Form',
    props: {
        autocomplete: {
            type: String,
            default:"on"
        },
        multipart: {
            type: Boolean,
            default: false
        },
        validate: {
            type: Boolean,
            default: false
        }
    },
})
</script>
