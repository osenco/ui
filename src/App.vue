<template>
  <container fluid>
    <nav-bar>
      <template #toggle>
        <drawer>
          <template #toggle> Menu </template>
        </drawer>
      </template>
    </nav-bar>
    <row>
      <column md="6">
        <form-group label="Name">
          <form-input name="name" />
        </form-group>
        <form-group label="Password">
          <password name="password" />
        </form-group>
      </column>

      <column md="6" class="mt-2">
        <columnlapse
          class="btn btn-rounded btn-primary"
          toggleInput="Contact Details"
        >
          <form-group label="Email Address">
            <form-input email name="email" />
          </form-group>

          <form-group label="Phone">
            <form-input tel name="phone" />
          </form-group>
        </columnlapse>
      </column>

      <column md="6" class="mt-2">
        <accordion>
          <accordion-item id="profile" title="Profile">
            Something awesome
          </accordion-item>
        </accordion>
      </column>
      <column md="6">
        <btn primary round> Submit Now </btn>
        <btn primary icon lg float>&raquo;</btn>
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
import Password from './components/Form/Password.vue'

import Columnlapse from './components/Columnlapse/Columnlapse.vue'

import Tabs from './components/Nav/Tabs/Tabs.vue'
import TabItem from './components/Nav/Tabs/TabItem.vue'

import Drawer from './components/Nav/OffCanvas.vue'
import NavBar from './components/Nav/Navbar.vue'

import Accordion from './components/Columnlapse/Accordion.vue'
import AccordionItem from './components/Columnlapse/AccordionItem.vue'

export default {
  name: 'App',
  components: {
    Container,
    FormGroup,
    FormInput,
    Password,
    Row,
    Column,
    Columnlapse,
    Drawer,
    NavBar,
    AccordionItem,
    Accordion,
    Btn,
  },
}
</script>