<template>
  <div>
    <h1>Tabs</h1>

    <Demobox>
      <tabs :vertical="verticalTab" :box="boxTab">
        <tab title="Tab 1" class="p-4">First tab</tab>
        <tab title="Tab 2" class="p-4">Second tab</tab>
        <tab title="Tab 3" :disabled="disabledTab" class="p-4"
          >Third tab</tab
        >
      </tabs>

      <template #props>
        <it-checkbox v-model="verticalTab" label="Vertical" />
        <it-checkbox v-model="boxTab" label="Tab Box" />
        <it-checkbox v-model="disabledTab" label="Disabled Tab" />
      </template>
    </Demobox>
    <Box :code="boxedCode" title="Tabs in box">
      <div class="flex flex-col flex-1">
        <tabs box class="flex-1">
          <tab title="Tab 1" class="p-4">First tab</tab>
          <tab title="Tab 2" class="p-4">Second tab</tab>
          <tab title="Tab 3" :disabled="disabledTab" class="p-4"
            >Third tab</tab
          >
        </tabs>
        <tabs vertical box class="flex-1 mt-3">
          <tab title="Tab 1" class="p-4">First tab</tab>
          <tab title="Tab 2" class="p-4">Second tab</tab>
          <tab title="Tab 3" :disabled="disabledTab" class="p-4"
            >Third tab</tab
          >
        </tabs>
      </div>
    </Box>
    <Box :code="notboxedCode" title="Tabs without box">
      <div class="flex flex-col flex-1">
        <tabs class="flex-1">
          <tab title="Tab 1" class="p-4">First tab</tab>
          <tab title="Tab 2" class="p-4">Second tab</tab>
          <tab title="Tab 3" :disabled="disabledTab" class="p-4"
            >Third tab</tab
          >
        </tabs>
        <tabs vertical class="flex-1 mt-4">
          <tab title="Tab 1" class="p-4">First tab</tab>
          <tab title="Tab 2" class="p-4">Second tab</tab>
          <tab title="Tab 3" :disabled="disabledTab" class="p-4"
            >Third tab</tab
          >
        </tabs>
      </div>
    </Box>
    <props-table
      tag-name="tabs"
      :data-sheet="dataSheet"
      :slot-sheet="slotSheet"
    />
    <props-table
      tag-name="tab"
      :data-sheet="dataSheet2"
      :slot-sheet="slotSheet2"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    verticalTab: false,
    boxTab: true,
    disabledTab: false,

    boxedCode: `<div style="display: flex; flex-direction: column; flex: 1">
  <tabs box style="flex: 1">
    <tab title="Tab 1">First tab</tab>
    <tab title="Tab 2">Second tab</tab>
    <tab title="Tab 3" :disabled="disabledTab">Third tab</tab>
  </tabs>

  <tabs vertical box style="flex: 1; margin-top: 12px">
    <tab title="Tab 1">First tab</tab>
    <tab title="Tab 2">Second tab</tab>
    <tab title="Tab 3" :disabled="disabledTab">Third tab</tab>
  </tabs>
</div>`,

    notboxedCode: `<div style="display: flex; flex-direction: column; flex: 1">
  <tabs style="flex: 1">
    <tab title="Tab 1">First tab</tab>
    <tab title="Tab 2">Second tab</tab>
    <tab title="Tab 3" :disabled="disabledTab">Third tab</tab>
  </tabs>

  <tabs vertical style="flex: 1; margin-top: 16px">
    <tab title="Tab 1">First tab</tab>
    <tab title="Tab 2">Second tab</tab>
    <tab title="Tab 3" :disabled="disabledTab">Third tab</tab>
  </tabs>
</div>`,

    dataSheet: [
      {
        property: 'initial-tab',
        type: ['Number'],
        default: '0',
        values: [],
        description: 'Selected tab index',
      },
      {
        property: 'vertical',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes tabs vertical',
      },
      {
        property: 'box',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Show tabs in box',
      },
    ],
    slotSheet: [{ name: 'default', description: 'Slot for tab' }],
    dataSheet2: [
      {
        property: 'title',
        type: ['String'],
        default: '',
        values: [],
        description: 'Tab title',
      },
      {
        property: 'disabled',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes tab disabled',
      },
    ],
    slotSheet2: [{ name: 'default', description: 'tab content' }],
  }),
})
</script>
