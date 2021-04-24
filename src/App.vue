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
      <col-6>
        <form-group label="Name">
          <form-input name="name" />
        </form-group>
        <form-group label="Password">
          <password name="password" />
        </form-group>
      </col-6>

      <col-6 class="mt-2">
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
      </col-6>

      <col-6 class="mt-2">
        <accordion>
          <accordion-item id="profile" title="Profile">
            Something awesome
          </accordion-item>
        </accordion>
      </col-6>
      <col-6>
        <btn primary round block> Submit Now </btn>
        <btn primary icon lg float>&raquo;</btn>
      </col-6>
    </row>
  </container>
</template>

<script>
import Container from './components/Containers/Container.vue'
import Row from './components/Grid/Row.vue'
import Col6 from './components/Grid/Col6.vue'
import FormGroup from './components/Form/FormGroup.vue'

import Btn from './components/Button/Btn.vue'

import FormInput from './components/Form/Input.vue'
import Password from './components/Form/Password.vue'

import Collapse from './components/Collapse/Collapse.vue'

import Tabs from './components/Nav/Tabs/Tabs.vue'
import TabItem from './components/Nav/Tabs/TabItem.vue'

import Drawer from './components/Nav/Drawer.vue'
import NavBar from './components/Nav/Navbar.vue'

import Accordion from './components/Collapse/Accordion.vue'
import AccordionItem from './components/Collapse/AccordionItem.vue'

export default {
  name: 'App',
  components: {
    Container,
    FormGroup,
    FormInput,
    Password,
    Row,
    Col6,
    Collapse,
    Drawer,
    NavBar,
    AccordionItem,
    Accordion,
    Btn,
  },
}
</script>