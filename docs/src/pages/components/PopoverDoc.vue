<template>
  <div>
    <h1>Popover</h1>
    <Box :code="exampleCode" title="Example">
      <it-popover :disabled="removed">
        <primary-btn>Delete</primary-btn>
        <template #content>
          <div>
            <p class="mb-2">Please confirm deletion</p>
            <div class="flex justify-end">
              <primary-btn size="small">No</primary-btn>
              <primary-btn
                class="ml-2"
                size="small"
                type="danger"
                @click="
                  ;(removed = true), $Message.success({ text: 'Deleted' })
                "
                >Yes</primary-btn
              >
            </div>
          </div>
        </template>
      </it-popover>
    </Box>

    <Box :code="positionsCode" title="Positions">
      <template #description>
        <p class="px-6">Click to see the popover</p>
      </template>

      <primary-btn-group vertical>
        <it-popover placement="top">
          <primary-btn>Top</primary-btn>

          <template #content>Top popover</template>
        </it-popover>
        <it-popover placement="right">
          <primary-btn>Right</primary-btn>

          <template #content>Right popover</template>
        </it-popover>
        <it-popover placement="left">
          <primary-btn>Left</primary-btn>

          <template #content>Left popover</template>
        </it-popover>
        <it-popover placement="bottom">
          <primary-btn>Bottom</primary-btn>

          <template #content>Bottom popover</template>
        </it-popover>
      </primary-btn-group>
    </Box>

    <Box :code="imageCode" title="Image">
      <template #description>
        <p class="px-6">
          You can disable paddings inside popover and show image
        </p>
      </template>

      <it-popover placement="top" borderless>
        <primary-btn>Show image</primary-btn>

        <template #content
          ><img
            width="150"
            src="https://pbs.twimg.com/profile_images/1063458070775427072/HAgejyos_400x400.jpg"
            alt="logo"
        /></template>
      </it-popover>
    </Box>
    <props-table
      tag-name="it-popover"
      :data-sheet="dataSheet"
      :slot-sheet="slotSheet"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    removed: false,
    exampleCode: `<it-popover :disabled="removed">
  <primary-btn>Delete</primary-btn>
  <template #content>
    <div>
      <p style="margin-bottom: 8px">Please confirm deletion</p>
      <div style="display: flex; justify-content: flex-end">
        <primary-btn size="small">No</primary-btn>
        <primary-btn
          style="margin-left: 8px"
          size="small"
          type="danger"
          @click="(removed = true), $Message.success({ text: 'Deleted' })"
          >Yes</primary-btn
        >
      </div>
    </div>
  </template>
</it-popover>`,

    positionsCode: `<primary-btn-group vertical>
  <it-popover placement="top">
    <primary-btn>Top</primary-btn>
    <template #content>Top popover</template>
  </it-popover>

  <it-popover placement="right">
    <primary-btn>Right</primary-btn>
    <template #content>Right popover</template>
  </it-popover>

  <it-popover placement="left">
    <primary-btn>Left</primary-btn>
    <template #content>Left popover</template>
  </it-popover>

  <it-popover placement="bottom">
    <primary-btn>Bottom</primary-btn>
    <template #content>Bottom popover</template>
  </it-popover>
</primary-btn-group>`,

    imageCode: `<it-popover placement="top" borderless>
  <primary-btn>Show logo</primary-btn>

  <template #content><img width="150" src="https://pbs.twimg.com/profile_images/1063458070775427072/HAgejyos_400x400.jpg" alt="logo"></template>
</it-popover>`,

    dataSheet: [
      {
        property: 'placement',
        type: ['String'],
        default: 'top',
        values: ['top', 'bottom', 'right', 'left'],
        description: 'Position of the popover',
      },
      {
        property: 'borderless',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Remove paddings',
      },
      {
        property: 'disabled',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Disables popover',
      },
    ],

    dataSheetGroup: [
      {
        property: 'size',
        type: ['String'],
        default: '40px',
        values: [],
        description: 'Avatar size for all avatars in group',
      },
      {
        property: 'square',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes avatars square in group',
      },
      {
        property: 'max',
        type: ['Number'],
        default: '-',
        values: [],
        description: 'Limit the maximum amount of visible avatars',
      },
    ],

    slotSheet: [
      {
        name: 'default',
        description: 'Active element for popover',
      },
      {
        name: 'content',
        description: 'Content of the popover',
      },
    ],
  }),
})
</script>
