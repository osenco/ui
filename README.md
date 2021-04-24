# Declarative UI Component Library for Vue

**Technology Used:**\
[Vuejs 3.0](https://github.com/vuejs/vue-next)\
[Typescript](https://github.com/microsoft/TypeScript)\
[Rollup](https://github.com/rollup/rollup)

## Project setup

Please follow below mentioned step to run this project:

- Clone the repo

```shell
https://github.com/osenco/ui
```

### Run

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Build Library

```
yarn build:js
```

### Build Library With Separate Css file

```
yarn build:js_css
```

### Lints and fixes files

```
yarn lint
```

## Usage Of Components Built

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
