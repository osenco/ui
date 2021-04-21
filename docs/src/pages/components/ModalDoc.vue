<template>
  <div>
    <h1>Modal</h1>

    <Box :code="exampleCode" title="Modal example">
      <primary-btn @click="defaultModal = true">Modal</primary-btn>
      <modal v-model="defaultModal">
        <template #image>
          <img
            src="https://images.unsplash.com/photo-1549277513-f1b32fe1f8f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          />
        </template>

        <template #header>
          <h3 style="margin: 0">Header</h3>
        </template>

        <template #body>
          <p>
            Modal body. You can put here whatever you want: forms, images, text
          </p>
        </template>
        <template #actions>
          <primary-btn
            type="primary"
            @click="$Message({ text: 'You got it' }), (defaultModal = false)"
            >Got it</primary-btn
          >
        </template>
      </modal>
    </Box>
    <Box :code="signinCode" title="Sign Up modal">
      <primary-btn type="primary" @click="signinModal = true">Sign up</primary-btn>
      <modal v-model="signinModal">
        <template #body>
          <div class="signupmodal p-3">
            <h2>Sign up</h2>
            <it-input
              label-top="Email"
              prefix-icon="email"
              type="email"
              placeholder="yourmail@gmail.com"
            />
            <div class="signupmodal-wrap-inputs flex flex-row">
              <div class="flex-1">
                <it-input label-top="First Name" placeholder="John" />
              </div>
              <div class="flex-1">
                <it-input label-top="Second Name" placeholder="Doe" />
              </div>
            </div>
            <it-input
              label-top="Username"
              prefix-icon="account_circle"
              placeholder="Unique Username"
              autocomplete="false"
            />
            <it-input
              label-top="Password"
              prefix-icon="lock"
              type="password"
              placeholder="Must have at least 6 characters"
              autocomplete="false"
            />
            <div class="signupmodal-wrap-checkbox">
              <it-checkbox
                v-model="signincheckbox"
                label="I agree to our Terms of Service"
              />
            </div>
            <primary-btn
              block
              size="big"
              type="primary"
              @click="
                $Message.success({ text: 'Welcome' }), (signinModal = false)
              "
              >Sign up</primary-btn
            >
          </div>
        </template>
      </modal>
    </Box>
    <Box :code="confirmCode" title="Confirmation modal">
      <primary-btn type="danger" @click="confirmModal = true"
        >Delete account</primary-btn
      >
      <modal v-model="confirmModal">
        <template #header>
          <h3>Delete account</h3>
        </template>
        <template #body>
          Account will be deleted permanently, please confirm
        </template>
        <template #actions>
          <primary-btn @click="confirmModal = false">Cancel</primary-btn>
          <primary-btn
            type="danger"
            @click="
              $Message.success({ text: 'Account deleted' }),
                (confirmModal = false)
            "
            >Delete</primary-btn
          >
        </template>
      </modal>
    </Box>
    <Box :code="imageCode" title="Image only modal">
      <primary-btn type="primary" @click="imageModal = true"
        >Show image</primary-btn
      >
      <modal v-model="imageModal">
        <template #image>
          <img
            src="https://pbs.twimg.com/media/EeQvsMiWsAIleas?format=png&name=large"
            width="400"
          />
        </template>
      </modal>
    </Box>
    <props-table :data-sheet="dataSheet" :slot-sheet="slotSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    defaultModal: false,
    signinModal: false,
    signincheckbox: false,
    confirmModal: false,
    imageModal: false,

    imageCode: `<primary-btn @click="imageModal = true" type="primary"
  >Show image</primary-btn
>
<modal v-model="imageModal">
  <template #image>
    <img
      src="https://pbs.twimg.com/media/EeQvsMiWsAIleas?format=png&name=large"
      width="400"
    />
  </template>
</modal>`,

    exampleCode: `<primary-btn @click="defaultModal = true">Modal</primary-btn>
<modal v-model="defaultModal">
  <template #image>
    <img
      src="https://images.unsplash.com/photo-1549277513-f1b32fe1f8f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    />
  </template>

  <template #header>
    <h3 style="margin: 0">Header</h3>
  </template>

  <template #body>
    <p>Modal body. You can put here whatever you want: forms, images, text</p>
  </template>
  <template #actions>
    <primary-btn
      type="primary"
      @click="$Message({ text: 'You got it' }), (defaultModal = false)"
      >Got it</primary-btn
    >
  </template>
</modal>`,

    signinCode: `<primary-btn @click="signinModal = true" type="primary">Sign up</primary-btn>
<modal v-model="signinModal">
  <template #body>
    <div class="signupmodal">
    <h2>Sign up</h2>
    <it-input labelTop="Email" prefix-icon="email" type="email" placeholder="yourmail@gmail.com" />
      <div class="signupmodal-wrap-inputs" style="display:flex;">
        <it-input style="flex:1" labelTop="Second Name" placeholder="Doe" />
        <it-input style="flex:1" labelTop="First Name" placeholder="John" />
      </div>
      <it-input labelTop="Username" prefix-icon="account_circle" placeholder="Unique Username" />
      <it-input labelTop="Password" prefix-icon="lock" type="password" placeholder="Must have at least 6 characters" />
      <div class="signupmodal-wrap-checkbox">
        <it-checkbox v-model="signincheckbox" label="I agree to our Terms of Service" />
      </div>
      <primary-btn
        block
        size="big"
        type="primary"
        @click="
          $Message.success({ text: 'Welcome' }), (signinModal = false)
        "
        >Sign up</primary-btn
      >
    </div>
  </template>
</modal>`,

    confirmCode: `<primary-btn @click="confirmModal = true" type="danger">Delete account</primary-btn>
<modal v-model="confirmModal">
  <template #header>
    <h3>Delete account</h3>
  </template>
  <template #body>
    Account will be deleted permanently, please confirm
  </template>
  <template #actions>
    <primary-btn @click="confirmModal = false">Cancel</primary-btn>
    <primary-btn
      type="danger"
      @click="
        $Message.success({ text: 'Account deleted' }),
          (confirmModal = false)
      "
      >Delete</primary-btn
    >
  </template>
</modal>`,
    dataSheet: [
      {
        property: 'value (v-model)',
        type: ['Boolean'],
        default: '',
        values: [],
        description: 'v-model value of the modal',
      },
      {
        property: 'closable-mask',
        type: ['Boolean'],
        default: 'true',
        values: [],
        description: 'Close modal on the mask click',
      },
      {
        property: 'width',
        type: ['String'],
        default: '500px',
        values: [],
        description: 'Modal body width',
      },
      // todo:
      // {
      //   property: 'close-on-esc',
      //   type: ['Boolean'],
      //   default: 'true',
      //   values: [],
      //   description: 'Close modal on esc',
      // },
    ],

    slotSheet: [
      {
        name: 'default',
        description: 'Modal body without padding',
      },
      {
        name: 'image',
        description: 'Modal image',
      },
      {
        name: 'header',
        description: 'Modal header',
      },
      {
        name: 'body',
        description: 'Modal body',
      },
      {
        name: 'actions',
        description: 'Modal action buttons',
      },
    ],
  }),
})
</script>

<style lang="less">
.signupmodal {
  & > * + * {
    margin: 16px 0;
  }

  &-wrap-inputs {
    margin-left: -6px;
    margin-right: -6px;

    > div {
      padding: 0 6px;
    }
  }
}
</style>
