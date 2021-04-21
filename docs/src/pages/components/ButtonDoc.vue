<template>
  <div>
    <h1>Button</h1>

    <Demobox>
      <primary-btn
        :type="buttonType"
        :outlined="buttonOutlined"
        :round="buttonRound"
        :pulse="buttonPulse"
        :loading="buttonLoading"
        :disabled="buttonDisabled"
        :icon="buttonIconValue"
        :block="buttonBlock"
        >{{ buttonText }}</primary-btn
      >
      <template #props>
        <single-select
          v-model="buttonType"
          placeholder="Select type"
          label-top="Button type"
          :options="buttonTypes"
        >
        </single-select>
        <it-input v-model="buttonText" label-top="Button text" />
        <it-checkbox v-model="buttonOutlined" label="Outline" />
        <it-checkbox v-model="buttonRound" label="Round" />
        <it-checkbox v-model="buttonIcon" label="Icon" />
        <it-checkbox v-model="buttonLoading" label="Loading" />
        <it-checkbox v-model="buttonPulse" label="Pulse" />
        <it-checkbox v-model="buttonBlock" label="Block" />
        <it-checkbox v-model="buttonDisabled" label="Disabled" />
      </template>
    </Demobox>
    <Box :code="codeType" title="Type">
      <primary-btn>Button</primary-btn>
      <primary-btn type="primary">Button</primary-btn>
      <primary-btn type="success">Button</primary-btn>
      <primary-btn type="danger">Button</primary-btn>
      <primary-btn type="warning">Button</primary-btn>
      <primary-btn type="black">Button</primary-btn>
    </Box>
    <Box :code="codeOutline" title="Outline">
      <primary-btn type="primary" outlined>Button</primary-btn>
      <primary-btn type="success" outlined>Button</primary-btn>
      <primary-btn type="danger" outlined>Button</primary-btn>
      <primary-btn type="warning" outlined>Button</primary-btn>
      <primary-btn type="black" outlined>Button</primary-btn>
    </Box>
    <Box :code="codeText" title="Text type">
      <primary-btn text>Button</primary-btn>
      <primary-btn type="primary" text>Button</primary-btn>
      <primary-btn type="success" text>Button</primary-btn>
      <primary-btn type="danger" text>Button</primary-btn>
      <primary-btn type="warning" text>Button</primary-btn>
    </Box>
    <Box :code="codeRound" title="Round">
      <primary-btn round>Button</primary-btn>
      <primary-btn type="primary" round>Button</primary-btn>
      <primary-btn type="success" round>Button</primary-btn>
      <primary-btn type="danger" round>Button</primary-btn>
      <primary-btn type="warning" round>Button</primary-btn>
      <primary-btn type="black" round>Button</primary-btn>
    </Box>
    <Box :code="codeBlock" title="Block">
      <primary-btn block>Button</primary-btn>
      <br />
      <primary-btn class="ml-0" type="primary" block>Button</primary-btn>
    </Box>
    <Box :code="codeSize" title="Size">
      <primary-btn size="small">Button</primary-btn>
      <primary-btn size="normal">Button</primary-btn>
      <primary-btn size="big">Button</primary-btn>
    </Box>
    <Box :code="codeIcon" title="With icon">
      <primary-btn icon="face">Button</primary-btn>
      <primary-btn icon="face" />
      <primary-btn icon="face" icon-after>Button</primary-btn>
    </Box>
    <Box :code="toggleCode" title="Toggle">
      <primary-btn
        :icon="following ? 'done' : 'person'"
        :type="following ? 'primary' : 'neutral'"
        @click="following = !following"
        >{{ following ? 'Following' : 'Follow' }}</primary-btn
      >
    </Box>
    <Box :code="codeLoading" title="Loading">
      <primary-btn type="primary" loading>Loading</primary-btn>
      <primary-btn type="primary" loading outlined>Loading</primary-btn>
    </Box>
    <Box :code="codePulse" title="Pulse">
      <template #description>
        <p class="mx-6">Pulse helps you to catch user's attention</p>
      </template>
      <primary-btn type="primary" pulse>Look at me</primary-btn>
      <primary-btn type="primary" pulse outlined>Look at me</primary-btn>
    </Box>
    <Box :code="codeDisabled" title="Disabled">
      <primary-btn size="small" disabled>Button</primary-btn>
      <primary-btn size="normal" disabled>Button</primary-btn>
      <primary-btn size="big" disabled>Button</primary-btn>
    </Box>
    <Box :code="codeGroup" title="Group">
      <div class="margins">
        <primary-btn-group>
          <primary-btn>Left</primary-btn>
          <primary-btn>Middle</primary-btn>
          <primary-btn>Right</primary-btn>
        </primary-btn-group>
        <primary-btn-group>
          <primary-btn type="primary" outlined>Left</primary-btn>
          <primary-btn type="primary" outlined>Middle</primary-btn>
          <primary-btn type="primary" outlined>Right</primary-btn>
        </primary-btn-group>
      </div>
    </Box>

    <Box :code="codeVerticalGroup" title="Vertical group">
      <div class="margins">
        <primary-btn-group vertical>
          <primary-btn>Top</primary-btn>
          <primary-btn>Middle</primary-btn>
          <primary-btn>Bottom</primary-btn>
        </primary-btn-group>
        <primary-btn-group vertical>
          <primary-btn type="primary" outlined>Top</primary-btn>
          <primary-btn type="primary" outlined>Middle</primary-btn>
          <primary-btn type="primary" outlined>Bottom</primary-btn>
        </primary-btn-group>
      </div>
    </Box>

    <props-table tag-name="primary-btn" :data-sheet="dataSheet" />
    <props-table tag-name="primary-btn-group" :data-sheet="dataSheetGroup" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    buttonText: 'Button',
    buttonOutlined: false,
    buttonRound: false,
    buttonDisabled: false,
    buttonLoading: false,
    following: false,
    buttonPulse: false,
    buttonBlock: false,
    buttonType: 'primary',
    buttonTypes: [
      'neutral',
      'primary',
      'success',
      'danger',
      'warning',
      'black',
    ],
    buttonIcon: false,

    codeType: `<primary-btn>Button</primary-btn>
<primary-btn type="primary">Button</primary-btn>
<primary-btn type="success">Button</primary-btn>
<primary-btn type="danger">Button</primary-btn>
<primary-btn type="warning">Button</primary-btn>
<primary-btn type="black">Button</primary-btn>
`,
    codeSize: `<primary-btn size="small">Button</primary-btn>
<primary-btn size="normal">Button</primary-btn>
<primary-btn size="big">Button</primary-btn>`,

    codeOutline: `<primary-btn type="primary" outlined>Button</primary-btn>
<primary-btn type="success" outlined>Button</primary-btn>
<primary-btn type="danger" outlined>Button</primary-btn>
<primary-btn type="warning" outlined>Button</primary-btn>
<primary-btn type="black" outlined>Button</primary-btn>`,

    codeRound: `<primary-btn round>Button</primary-btn>
<primary-btn type="primary" round>Button</primary-btn>
<primary-btn type="success" round>Button</primary-btn>
<primary-btn type="danger" round>Button</primary-btn>
<primary-btn type="warning" round>Button</primary-btn>
<primary-btn type="black" round>Button</primary-btn>`,

    codeIcon: `<primary-btn icon="face">Button</primary-btn>
<primary-btn icon="face" />
<primary-btn icon="face" iconAfter>Button</primary-btn>`,

    toggleCode: `<primary-btn
  @click="following = !following"
  :icon="following ? 'done' : 'person'"
  :type="following ? 'primary' : 'neutral'"
  >{{ following ? 'Following' : 'Follow' }}</primary-btn>`,

    codeLoading: `<primary-btn type="primary" loading>Loading</primary-btn>
<primary-btn type="primary" loading outlined>Loading</primary-btn>`,

    codePulse: `<primary-btn type="primary" pulse>Look at me</primary-btn>
<primary-btn type="primary" pulse outlined>Look at me</primary-btn>`,

    codeDisabled: `<primary-btn size="small" disabled>Button</primary-btn>
<primary-btn size="normal" disabled>Button</primary-btn>
<primary-btn size="big" disabled>Button</primary-btn>`,

    codeBlock: `<primary-btn block>Button</primary-btn>
<primary-btn type="primary" block>Button</primary-btn>`,

    codeGroup: `<primary-btn-group>
  <primary-btn>Left</primary-btn>
  <primary-btn>Middle</primary-btn>
  <primary-btn>Right</primary-btn>
</primary-btn-group>
<primary-btn-group>
  <primary-btn type="primary" outlined>Left</primary-btn>
  <primary-btn type="primary" outlined>Middle</primary-btn>
  <primary-btn type="primary" outlined>Right</primary-btn>
</primary-btn-group>`,

    codeVerticalGroup: `<primary-btn-group vertical>
  <primary-btn>Left</primary-btn>
  <primary-btn>Middle</primary-btn>
  <primary-btn>Right</primary-btn>
</primary-btn-group>
<primary-btn-group vertical>
  <primary-btn type="primary" outlined>Left</primary-btn>
  <primary-btn type="primary" outlined>Middle</primary-btn>
  <primary-btn type="primary" outlined>Right</primary-btn>
</primary-btn-group>`,

    codeText: `<primary-btn text>Button</primary-btn>
<primary-btn type="primary" text>Button</primary-btn>
<primary-btn type="success" text>Button</primary-btn>
<primary-btn type="danger" text>Button</primary-btn>
<primary-btn type="warning" text>Button</primary-btn>`,

    dataSheetGroup: [
      {
        property: 'vertical',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Make group vertical',
      },
    ],

    dataSheet: [
      {
        property: 'type',
        type: ['String'],
        default: 'neutral',
        values: ['primary', 'success', 'danger', 'warning', 'black', 'neutral'],
        description: 'Type of the button',
      },
      {
        property: 'outlined',
        type: ['Boolean'],
        default: false,
        values: [],
        description: 'Makes button outlined',
      },
      {
        property: 'round',
        type: ['Boolean'],
        default: false,
        values: [],
        description: 'Makes button rounded',
      },
      {
        property: 'size',
        type: ['String'],
        default: 'normal',
        values: ['small', 'normal', 'big'],
        description: 'Size of the button',
      },
      {
        property: 'icon',
        type: ['String'],
        default: '',
        values: ['material-icon'],
        description: 'Add material-icon with provided name',
      },
      {
        property: 'loading',
        type: ['Boolean'],
        default: false,
        values: [],
        description: 'Shows loading spinner',
      },
      {
        property: 'block',
        type: ['Boolean'],
        default: false,
        values: [],
        description: 'Makes button fit parent width',
      },
      {
        property: 'disabled',
        type: ['Boolean'],
        default: false,
        values: [],
        description: 'Makes button disabled',
      },
      {
        property: 'pulse',
        type: ['Boolean'],
        default: false,
        values: [],
        description: 'Add pulse to the element',
      },
    ],
  }),
  computed: {
    buttonIconValue(): string | null {
      return this.buttonIcon ? 'favorite' : null
    },
  },

  // mounted() {
  //   console.log(this.$route)
  // }
})
</script>
