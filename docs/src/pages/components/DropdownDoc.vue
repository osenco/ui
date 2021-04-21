<template>
  <div>
    <h1>Dropdown</h1>

    <Demobox>
      <dropdown :clickable="clickable" :placement="dropdownType">
        <primary-btn>{{ clickable ? 'Click' : 'Hover' }} me</primary-btn>
        <template #menu>
          <dropdown-menu>
            <dropdown-item>Hello</dropdown-item>
            <dropdown-item disabled>Disabled</dropdown-item>
            <dropdown-item icon="cloud">Cloud</dropdown-item>
            <dropdown-item divided>Divided</dropdown-item>
          </dropdown-menu>
        </template>
      </dropdown>
      <template #props>
        <single-select
          v-model="dropdownType"
          placeholder="Select placement"
          label-top="Dropdown placement"
          :options="dropdownTypes"
        />
        <it-checkbox v-model="clickable" label="Clickable" />
      </template>
    </Demobox>

    <Box :code="codeExample" title="Example">
      <dropdown>
        <primary-btn>Hover me</primary-btn>
        <template #menu>
          <dropdown-menu>
            <dropdown-item>Hello</dropdown-item>
            <dropdown-item disabled>Disabled</dropdown-item>
            <dropdown-item icon="cloud">Cloud</dropdown-item>
            <dropdown-item divided>Divided</dropdown-item>
          </dropdown-menu>
        </template>
      </dropdown>
    </Box>
    <props-table tag-name="dropdown" :data-sheet="dataSheet" />
    <props-table tag-name="dropdown-item" :data-sheet="dataSheet2" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    // dropdownDisabled = false

    dropdownType: 'bottom',
    clickable: false,
    dropdownTypes: [
      'bottom',
      'bottom-left',
      'bottom-right',
      'left',
      'left-top',
      'left-bottom',
      'right',
      'right-top',
      'right-bottom',
      'top',
      'top-left',
      'top-right',
    ],

    codeExample: `<dropdown>
  <primary-btn>Hover me</primary-btn>
  <dropdown-menu slot="menu">
    <dropdown-item>Hello</dropdown-item>
    <dropdown-item disabled>Disabled</dropdown-item>
    <dropdown-item icon="cloud">Cloud</dropdown-item>
    <dropdown-item divided>Divided</dropdown-item>
  </dropdown-menu>
</dropdown>`,

    dataSheet: [
      {
        property: 'placement',
        type: ['String'],
        default: 'bottom',
        values: [
          'bottom',
          'bottom-left',
          'bottom-right',
          'left',
          'left-top',
          'left-bottom',
          'right',
          'right-top',
          'right-bottom',
          'top',
          'top-left',
          'top-right',
        ],
        description: 'Position of the dropdown',
      },
      {
        property: 'clickable',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Dropdown activates only on click',
      },
    ],

    dataSheet2: [
      {
        property: 'disabled',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Disabled menu item',
      },
      {
        property: 'divided',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Divides menu item from previous item',
      },
      {
        property: 'icon',
        type: ['String'],
        default: '',
        values: ['Material Icon'],
        description: 'Adds icon to the mmenu item',
      },
    ],
  }),
})
</script>
