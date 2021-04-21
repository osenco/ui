<p align="center">
  <a href="https://quatrochan.github.io/Osen/">
    <img width="300" src="https://quatrochan.github.io/Osen/eqqqual.png">
  </a>

<p align="center">
<img src="https://img.shields.io/npm/v/osen-vue?color=blue">
<img src="https://img.shields.io/npm/l/osen-vue">
<img src="https://img.shields.io/npm/dw/osen-vue">
<img src="https://img.badgesize.io/https:/unpkg.com/osen-vue/?label=Brotli%20size%3A%20JS&compression=brotli">

<a href="https://twitter.com/OsenVue">
    <img src="https://img.shields.io/twitter/follow/OsenVue?label=Osen%20Vue&style=social" alt="Twitter Follow">
</a>
</p>
</p>

<h2 align="center">
  Osen UI
</h2>

<div align="center">
Osen UI is a Vue 3 components library with 30+ components based on TypeScript and personal design system.
<br>
  <a href="https://quatrochan.github.io/Osen/"><strong>Explore Osen UI docs</strong></a>
</div>

# Features
  - Enterpise class UI based on Osen design system
  - Supports [Material Design Icons](https://material.io/resources/icons/)
  - Lightweight: 18KB brotli
  - Includes 30+ components
  - Based on TypeScript


# Links

<b> Twitter: </b> [@Yan](https://twitter.com/k0mmsussertod)

# Install

You need [Vue.js](https://v3.vuejs.org/) version 3.0+

```bash
# npm
npm install osen-vue
```

```bash
# yarn
yarn add osen-vue
```

# Usage

## All components

```js
import { createApp } from 'vue'
import Osen from 'osen-vue'
import 'osen-vue/dist/style.css'

createApp.use(Osen)
```

## Or individual components

```js
import { createApp } from 'vue'
import { Button, Alert, Switch } from 'osen-vue'
import 'osen-vue/dist/style.css'

createApp.use(Button).use(Alert).use(Switch)
```

<!-- ## Or start with CDN

```html
<!DOCTYPE html>
<html>
  <head>
    <link
      href="https://cdn.jsdelivr.net/npm/osen-vue/dist/style.css"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"
    />
  </head>
  <body>
    <div id="app">
      <primary-btn type="primary">Quickstart</primary-btn>
    </div>

    <script src="https://unpkg.com/vue@next"></script>
    <script src="https://unpkg.com/osen-vue"></script>
    <script>
      Vue.createApp()
    </script>
  </body>
</html>
``` -->

# License

[MIT](https://raw.githubusercontent.com/quatrochan/Osen/master/LICENSE)
