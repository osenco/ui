<template>
  <div>
    <h1>Tooltip</h1>
    <p class="mb-4">
      Tooltip is a HOC, use it to show tooltip over the slot
    </p>
    <Demobox>
      <tooltip :content="tooltipContent" :placement="tooltipPlacement">
        <primary-btn>Hover me</primary-btn>
      </tooltip>

      <template #props>
        <single-select
          v-model="tooltipPlacement"
          placeholder="Select position"
          label-top="Tag position"
          :options="tooltipPlacements"
        >
        </single-select>
        <it-input v-model="tooltipContent" label-top="Tooltip text" />
      </template>
    </Demobox>
    <Box :code="positionCode" title="Position">
      <div class="flex flex-col items-center">
        <primary-btn-group vertical>
          <tooltip content="Top" placement="top">
            <primary-btn>Top</primary-btn>
          </tooltip>
          <tooltip content="Right" placement="right">
            <primary-btn>Right</primary-btn>
          </tooltip>
          <tooltip content="Left" placement="left">
            <primary-btn>Left</primary-btn>
          </tooltip>
          <tooltip content="Bottom" placement="bottom">
            <primary-btn>Bottom</primary-btn>
          </tooltip>
        </primary-btn-group>
      </div>
    </Box>
    <Box :code="slotCode" title="Content Slot">
      <div class="flex flex-col items-center">
        <tooltip placement="top">
          <template #content>
            <span
              ><it-tag type="primary">Wow</it-tag> &nbsp; I came from slot</span
            >
          </template>
          <primary-btn>Slot content</primary-btn>
        </tooltip>
      </div>
    </Box>
    <props-table :slot-sheet="slotSheet" :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    tooltipContent: 'Hello there',
    // tooltipPermanent: boolean = false
    tooltipPlacement: 'top',
    tooltipPlacements: ['top', 'right', 'bottom', 'left'],

    positionCode: `<tooltip content="Top" placement="top">
  <primary-btn>Top</primary-btn>
</tooltip>
<tooltip content="Right" placement="right">
  <primary-btn>Right</primary-btn>
</tooltip>
<tooltip content="Left" placement="left">
  <primary-btn>Left</primary-btn>
</tooltip>
<tooltip content="Bottom" placement="bottom">
  <primary-btn>Bottom</primary-btn>
</tooltip>`,

    slotCode: `<tooltip placement="top">
  <span slot="content"><it-tag type="primary">Wow</it-tag> &nbsp; I came from slot</span>
  <primary-btn>Slot content</primary-btn>
</tooltip>`,

    dataSheet: [
      {
        property: 'content',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Content of the tooltip',
      },
      {
        property: 'placement',
        type: ['String'],
        default: 'top',
        values: ['top', 'bottom', 'right', 'left'],
        description: 'Position of the popover',
      },
      {
        property: 'disabled',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes tooltip disabled',
      },
      {
        property: 'hoverable',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes tooltip hoverable',
      },
    ],

    slotSheet: [
      {
        name: 'default',
        description: 'Hoverable element for tooltip',
      },
      {
        name: 'content',
        description: 'Content of the tooltip',
      },
    ],
  }),
})
</script>
