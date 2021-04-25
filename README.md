# Declarative UI Component Library for Vue

**Technology Used:**\
[Vuejs 3.0](https://github.com/vuejs/vue-next)\
[Typescript](https://github.com/microsoft/TypeScript)\
[Rollup](https://github.com/rollup/rollup)

## Import

**As Component**

```
  import { FormInput } from '@osenco/ui/dist/esm/forminput';
  ...
  components:{
    FormInput
  }
```

**As Plugin**

```
  import { FormInput } from '@osenco/ui';
    ...
  app.use(FormInput)
```

```
  import * as ui from '@osenco/ui';
    ...
  app.use(ui)
```

## Usage

**As Component**

```vue
  <column md="6">
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
```
