<template>
  <toast-container bottom="0" end="0">
    <ui toast title="Some Warning" mt="2"> Something went wrong! </ui>
  </toast-container>

  <main>
    <container fluid px="4">
      <row>
        <column md="2" d="none" d-sm="block">
          <avatar
            :subject="user"
            image="./assets/logo.png"
            :caption="user.email"
            dark
          />
          {{ user }}
        </column>

        <column md="10" sm="12">
          <header>
            <ui fluid>
              <navbar>
                <template #toggle>
                  <drawer> </drawer>
                </template>
              </navbar>
            </ui>
          </header>

          <wrap mt="2">
            <ui fluid d-lg="none" d-sm="block"> Go Drunk, You're Home </ui>
            <modal title="Add New User" sm>
              <form-wrap>
                <form-group mb="3" sm label="Name" input name="fullname" />
              </form-wrap>
            </modal>
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
                      multiple
                      name="titles"
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

                <ui alert danger mt="2"> Something went wrong! </ui>
                <ui progress now="46" dark striped animate>46%</ui>
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
              <ui col md="6" mt="2">
                <btn dark> Dark Button </btn>
                <br />
                <btn light> Light Button </btn>
                <br />
                <spinner />
                <br />
                <ui spinner grow />
                <br />
                <btn primary>
                  <spinner sm /> <span>Spinner In Button</span>
                </btn>
                <btn secondary button icon lg fab>
                  <icon name="arrow-up" />
                </btn>
              </ui>

              <column md="12">
                <ui
                  table
                  mt="3"
                  caption="Updated a few seconds ago"
                  border="2"
                  :headers="{ id: 'ID', status: 'Status', message: 'Message' }"
                  :records="sessions.data"
                />

                <ui
                  paginate
                  :data="sessions"
                  @change="fetchData"
                  position="center"
                />
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

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, ref } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'App',

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
      titles: [],
    })

    const sessions = ref({})

    function fetchData(page = 1) {
      axios
        .get(`http://telemedke.herokuapp.com/api/sessions?page=${page}`)
        .then((res: any) => {
          sessions.value = res.data
        })
    }

    onBeforeMount(() => {
      fetchData()
    })

    return { user, sessions, fetchData }
  },
})
</script>
