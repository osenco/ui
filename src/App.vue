<template>
  <container fluid>
    <nav-bar>
      <template #toggle>
        <drawer> </drawer>
      </template>
    </nav-bar>
    <row>
      <column md="6">
        {{ user }}
        <form-group label="Name">
          <form-input name="name" v-model="user.name" />
        </form-group>
        <form-group label="Password">
          <form-input password name="password" v-model="user.password" />
        </form-group>
        <form-group
          input
          label="Address"
          text
          name="address"
          v-model="user.address"
        />
      </column>

      <column md="6" sm="12" class="mt-2">
        <collapse
          class="btn btn-rounded btn-primary"
          toggleInput="Contact Details"
        >
          <form-group label="Email Address">
            <form-input email name="email" />
          </form-group>

          <form-group label="Phone">
            <form-input tel name="phone" />
          </form-group>
        </collapse>
      </column>

      <column md="6" class="mt-2">
        <accordion>
          <accordion-item id="profile" title="Profile">
            Something awesome
          </accordion-item>
        </accordion>
      </column>
      <column md="6">
        <btn primary submit round> Submit Now </btn>
        <btn secondary button icon lg float>&raquo;</btn>
      </column>
    </row>
  </container>
</template>

<script>
import Container from './components/Containers/Container.vue'
import Row from './components/Grid/Row.vue'
import Column from './components/Grid/Column.vue'
import FormGroup from './components/Form/FormGroup.vue'

import Btn from './components/Button/Btn.vue'

import FormInput from './components/Form/Input.vue'

import Collapse from './components/Collapse/Collapse.vue'

import Tabs from './components/Nav/Tabs/Tabs.vue'
import TabItem from './components/Nav/Tabs/TabItem.vue'

import Drawer from './components/Nav/Drawer.vue'
import NavBar from './components/Nav/Navbar.vue'

import Accordion from './components/Collapse/Accordion.vue'
import AccordionItem from './components/Collapse/AccordionItem.vue'
import { reactive } from '@vue/reactivity'

export default {
  name: 'App',
  components: {
    Container,
    FormGroup,
    FormInput,
    Row,
    Column,
    Collapse,
    Drawer,
    NavBar,
    AccordionItem,
    Accordion,
    Btn,
  },

  setup() {
    const user = reactive({
      name: '',
      phone: '',
      email: '',
      password: '',
      address: '',
    })

    return { user }
  },
}
</script>