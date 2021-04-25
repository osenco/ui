<template>
    <form @submit.prevent="submitForm" autocomplete="autocomplete" :content-type="multipart ? `multipart/form-data`: 'form'" :class="{
        'needs-validation': validate
    }">
        <slot></slot>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Form',
    emits: ['submit'],
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
    setup(props, {emit}) {
        function submitForm(e: Event) {
            emit('submit')
        }

        return { submitForm}
    },
})
</script>
