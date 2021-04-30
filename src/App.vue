<template>
  <header>
    <ui container>
      <nav-bar>
        <template #toggle>
          <drawer> </drawer>
        </template>
      </nav-bar>
    </ui>
  </header>

  <main>
    <container fluid px="4">
      <row>
        <column md="3" d="none" d-sm="block">
          <avatar
            :subject="user"
            image="./assets/logo.png"
            :caption="user.email"
            dark
          />
          {{ user }}
        </column>

        <column md="9" sm="12">
          <ui fluid d-lg="none" d-sm="block"> Go Drunk, You're Home </ui>
          <wrap mt="2">
            <row>
              <column md="12">
                <form-wrap validate>
                  <form-group label="Name">
                    <form-input name="name" v-model="user.name" />
                  </form-group>

                  <form-group label="Phone">
                    <form-input tel name="phone" v-model="user.phone" />
                  </form-group>

                  <form-group label="Gender">
                    <form-select
                      name="gender"
                      v-model="user.gender"
                      :options="{ m: 'Male', f: 'Female' }"
                    />
                  </form-group>

                  <form-group label="Job title">
                    <form-multi-select
                      name="gender"
                      v-model="user.titles"
                      :options="{ dr: 'Dr', lr: 'Lord' }"
                    />
                  </form-group>

                  <form-group label="Notify">
                    <form-check
                      name="notify"
                      v-model="user.notify"
                      label="Notify Me"
                    />
                  </form-group>
                  <form-group label="Activity">
                    <form-check-multi
                      v-model="user.activity"
                      label="Login"
                      value="Login"
                      id="login"
                    />
                    <form-check-multi
                      v-model="user.activity"
                      label="Purchase"
                      value="Purchase"
                      id="purchase"
                      inline
                    />
                  </form-group>
                  <form-group label="Title">
                    <form-radio
                      name="title"
                      v-model="user.title"
                      label="Mr."
                      value="Mr"
                      id="mr"
                    />
                    <form-radio
                      name="title"
                      v-model="user.title"
                      label="Mrs."
                      value="Mrs"
                      id="mrs"
                      inline
                    />
                  </form-group>
                  <form-group
                    input
                    label="Password"
                    password
                    name="password"
                    v-model="user.password"
                  />
                  <form-group label="Address">
                    <form-textarea name="address" v-model="user.address" />
                  </form-group>

                  <form-group>
                    <btn primary submit round> Submit Now </btn>
                  </form-group>
                </form-wrap>
                <collapse
                  class="btn btn-rounded btn-primary mt-4"
                  toggleInput="Contact Details"
                >
                  <form-group label="Email Address">
                    <form-input email name="email" v-model="user.email" />
                  </form-group>
                </collapse>
              </column>

              <column md="6" class="mt-2">
                <accordion id="something">
                  <accordion-item
                    id="about"
                    parent="something"
                    title="About"
                    active
                  >
                    Something awesome
                  </accordion-item>
                  <accordion-item
                    id="profile"
                    parent="something"
                    title="Profile"
                  >
                    Something awesome
                  </accordion-item>
                </accordion>
              </column>
              <column md="6">
                <btn secondary button icon lg fab>
                  <icon name="arrow-up" />
                </btn>
              </column>
            </row>
          </wrap>
        </column>
      </row>
    </container>
  </main>

  <footer class="footer">
    <wrap :mt="4" :w="100" :mx="4">
      <p>&copy; {{ new Date().getFullYear() }} | Osen Concepts</p>
    </wrap>
  </footer>
</template>

<script>
import Ui from './components/Ui/Ui.vue'
import Wrap from './components/Containers/Wrap.vue'
import Container from './components/Containers/Container.vue'
import Row from './components/Grid/Row.vue'
import Column from './components/Grid/Column.vue'
import FormGroup from './components/Form/FormGroup.vue'

import Btn from './components/Button/Btn.vue'

import Avatar from './components/Avatar/Avatar.vue'

import FormWrap from './components/Form/Wrap.vue'
import FormInput from './components/Form/Input.vue'
import FormTextarea from './components/Form/Textarea.vue'
import FormSelect from './components/Form/Select.vue'
import FormMultiSelect from './components/Form/MultiSelect.vue'
import FormCheck from './components/Form/Checkbox.vue'
import FormCheckMulti from './components/Form/MultiCheckbox.vue'
import FormRadio from './components/Form/Radio.vue'

import Collapse from './components/Collapse/Collapse.vue'

import Tabs from './components/Nav/Tabs/Tabs.vue'
import TabItem from './components/Nav/Tabs/TabItem.vue'

import Drawer from './components/Nav/Drawer.vue'
import NavBar from './components/Nav/Navbar.vue'

import Icon from './components/Icon/Icon.vue'

import Accordion from './components/Collapse/Accordion.vue'
import AccordionItem from './components/Collapse/AccordionItem.vue'
import { reactive } from '@vue/reactivity'

export default {
  name: 'App',
  // components: {
  //   Ui,
  //   Wrap,
  //   Container,
  //   FormWrap,
  //   FormGroup,
  //   FormInput,
  //   FormTextarea,
  //   FormSelect,
  //   FormMultiSelect,
  //   FormCheck,
  //   FormCheckMulti,
  //   FormRadio,
  //   Row,
  //   Column,
  //   Collapse,
  //   Drawer,
  //   NavBar,
  //   AccordionItem,
  //   Accordion,
  //   Btn,
  //   Icon,
  //   Avatar,
  // },

  setup() {
    const user = reactive({
      name: '',
      phone: '',
      email: '',
      password: '',
      address: '',
      gender: '',
      notify: false,
      activity: [],
      title: '',
      titles: []
    })

    return { user }
  },
}
</script>
