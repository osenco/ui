<template>
  <table
    class="table"
    :class="{
      'table-sm': sm,
      'table-dark': dark,
      'table-light': light,
      'table-info': info,
      'table-warning': warning,
      'table-danger': danger,
      'table-success': success,
      'table-secondary': secondary,
      'table-striped': striped,
      'table-hover': hover,
      'table-bordered': border,
      'table-borderless': border == 0,
      'table-responsive': responsive
    }"
  >
  <caption v-if="caption">{{ caption }}</caption>
    <thead :class="{
        'table-dark': head == 'dark',
        'table-light': head == 'light',
    }">
      <tr>
        <th v-for="(h, i) in headers" :key="i" scope="col">
          {{ h }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="r in records" :key="r.id">
        <td v-for="(h, i) in headers" :key="i">
          {{ r[i] }}
        </td>
      </tr>
    </tbody>
    <tfoot v-if="footer" :class="{
        'table-dark': footer == 'dark',
        'table-light': footer == 'light',
    }">
      <tr>
        <th v-for="(h, i) in headers" :key="i" scope="col">
          {{ h }}
        </th>
      </tr>
    </tfoot>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DataTable',
  props: {
    id: {
      default: Math.random().toString(36).substring(2, 9),
    },
    sm: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: false,
    },
    info: {
      type: Boolean,
      default: false,
    },
    warning: {
      type: Boolean,
      default: false,
    },
    danger: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    striped: {
      type: Boolean,
      default: false,
    },
    hover: {
      type: Boolean,
      default: false,
    },
    border: {
      type: [Boolean, String],
      default: false,
    },
    responsive: {
      type: Boolean,
      default: false,
    },
    head: {
      type: [Boolean, String],
      default: false,
    },
    footer: {
      type: Boolean,
      default: false,
    },
    caption: {
      type: String,
      default: "",
    },
    records: {
      type: Array,
    },
    headers: {
      type: [Array, Object],
    },
  },
})
</script>
