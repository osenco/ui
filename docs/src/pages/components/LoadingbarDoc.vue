<template>
  <div>
    <h1>Loading bar</h1>

    <Box :code="typesCode" title="Loading bar">
      <primary-btn @click="$Loading.start()">Start</primary-btn>
      <primary-btn @click="$Loading.update(50)">Set 50%</primary-btn>
      <primary-btn @click="$Loading.finish()">Finish</primary-btn>
    </Box>
    <props-table :method-sheet="methodSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    typesCode: `<primary-btn @click="$Loading.start()">Start</primary-btn>
<primary-btn @click="$Loading.update(50)">Set 50%</primary-btn>
<primary-btn @click="$Loading.finish()">Finish</primary-btn>
`,

    methodSheet: [
      {
        method: 'start',
        description: 'Start loading progress',
        // arguments: []
      },
      {
        method: 'update',
        description: 'Update progress value in percentage',
        arguments: 'value: number',
      },
      {
        method: 'finish',
        description: 'Finish loading and hide',
        // arguments: []
      },
    ],
  }),
})
</script>
