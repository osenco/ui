<template>
  <div>
    <h1>Message</h1>

    <Box :code="messagesCode" title="Message types">
      <primary-btn type="primary" @click="showMessage">Primary message</primary-btn>
      <primary-btn type="success" @click="showMessage('success')"
        >Success message</primary-btn
      >
      <primary-btn type="danger" @click="showMessage('danger')"
        >Danger message</primary-btn
      >
      <primary-btn type="warning" @click="showMessage('warning')"
        >Warning message</primary-btn
      >
    </Box>

    <Box :code="durationCode" title="Duration">
      <primary-btn
        @click="$Message({ duration: 5000, text: 'I have 5000ms left' })"
        >5000 ms</primary-btn
      >
    </Box>
    <props-table :event-sheet="eventSheet" :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    messagesCode:
      `<primary-btn @click="showMessage()">Primary message</primary-btn>
<primary-btn @click="showMessage('Success')" type="success">Success message</primary-btn>
<primary-btn @click="showMessage('Danger')" type="danger">Danger message</primary-btn>
<primary-btn @click="showMessage('Warning')" type="warning">Warning message</primary-btn>

` +
      `export default {
  methods: {
    showMessage(type) {
      switch (type) {
        case 'success':
          this.$Message.success({ text: 'Success message!' })
          break
        case 'danger':
          this.$Message.danger({ text: 'Danger message!' })
          break
        case 'warning':
          this.$Message.warning({ text: 'Success message!' })
          break
        default:
          this.$Message({ text: 'Primary message!' })
          break
      }
    }
  }
}`,

    durationCode: `<primary-btn @click="$Message({duration: 5000, text: 'I have 5000ms left'})">5000 ms</primary-btn>`,

    dataSheet: [
      {
        property: 'text',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Text of the message',
      },
      {
        property: 'type',
        type: ['String'],
        default: 'primary',
        values: ['primary', 'success', 'danger', 'warning'],
        description: 'Type of the message',
      },
      {
        property: 'duration',
        type: ['Number'],
        default: 4000,
        values: [],
        description: 'Message duration',
      },
      {
        property: 'icon',
        type: ['String'],
        default: '-',
        values: ['Material Icon'],
        description: 'Message icon',
      },
    ],

    eventSheet: [
      {
        event: '@on-close',
        description: 'The event function triggered when message hides',
        arguments: 'function',
      },
    ],
  }),
  methods: {
    showMessage(type: string) {
      switch (type) {
        case 'success':
          this.$Message.success({ text: 'Success message!' })
          break
        case 'danger':
          this.$Message.danger({ text: 'Danger message!' })
          break
        case 'warning':
          this.$Message.warning({ text: 'Warning message!' })
          break
        default:
          this.$Message({ text: 'Primary message!' })
          break
      }
    },
  },
})
</script>
