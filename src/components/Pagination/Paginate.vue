<template>
  <nav aria-label="Page Nav">
    <ul
      class="pagination pagination-borderless pagination-primary"
      :class="`justify-content-${position}`"
    >
      <li class="page-item first" :class="{ disabled: isFirstPage }">
        <a
          href="javascript:void(0)"
          class="page-link"
          @click.prevent="onClickFirstPage"
          :aria-label="firstLabel"
        >
          <slot name="first">
            <span aria-hidden="true">&laquo;</span>
            <span aria-hidden="true">&laquo;</span>
          </slot>
        </a>
      </li>

      <li class="page-item previous" :class="{ disabled: isFirstPage }">
        <a
          href="javascript:void(0)"
          class="page-link"
          @click.prevent="onClickPreviousPage"
          :aria-label="prevLabel"
        >
          <slot name="back">
            <span aria-hidden="true">&laquo;</span>
          </slot>
        </a>
      </li>

      <li
        v-for="page in pages"
        class="page-item"
        :class="{
          active: isCurrent(page.name),
          disabled: page.isDisabled,
        }"
        :key="page.name"
      >
        <a
          href="javascript:void(0)"
          class="page-link"
          @click.prevent="onClickPage(page.name)"
          :aria-label="`${pageLabel} ${page.name}`"
        >
          {{ page.name }}
        </a>
      </li>

      <li class="page-item next" :class="{ disabled: isLastPage }">
        <a
          href="javascript:void(0)"
          class="page-link"
          @click.prevent="onClickNextPage"
          :aria-label="nextLabel"
        >
          <slot name="forward">
            <span aria-hidden="true">&raquo;</span>
          </slot>
        </a>
      </li>

      <li class="page-item last" :class="{ disabled: isLastPage }">
        <a
          href="javascript:void(0)"
          class="page-link"
          @click.prevent="onClickLastPage"
          :aria-label="lastLabel"
        >
          <slot name="last">
            <span aria-hidden="true">&raquo;</span>
            <span aria-hidden="true">&raquo;</span>
          </slot>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
export default defineComponent({
  name: 'Pagination',

  props: {
    max: {
      type: Number,
      default: 3,
    },
    range: {
      type: Number,
      default: 5,
    },
    data: {
      type: Object,
      required: true,
      default: function () {
        return {
          current_page: 1,
          data: [],
          from: 1,
          last_page: 8,
          per_page: 10,
          to: 10,
          total: 78,
        }
      },
    },
    firstLabel: {
      type: String,
      default: 'Go to first page',
    },
    prevLabel: {
      type: String,
      default: 'Go to previous page',
    },
    nextLabel: {
      type: String,
      default: 'Go to next page',
    },
    pageLabel: {
      type: String,
      default: 'Go to page',
    },
    lastLabel: {
      type: String,
      default: 'Go to last page',
    },
    position: {
      type: String,
      default: 'start',
    },
  },

  emits: ['change'],

  // setup(props, { emit }) {
  //   const firstPage = computed(() => {
  //     if (props.data?.current_page === 1) {
  //       return 1
  //     }

  //     if (props.data?.current_page === props.data?.last_page) {
  //       return props.data?.last_page - props.max + 1
  //     }

  //     return props.data?.current_page - 1
  //   })

  //   const lastPage = computed(() => {
  //     return Math.min(firstPage.value + props.max - 1, props.data?.last_page)
  //   })

  //   const pages = computed(() => {
  //     const range = []
  //     for (let i = firstPage.value; i <= lastPage.value; i += 1) {
  //       range.push({
  //         name: i,
  //         isDisabled: i === props.data?.current_page,
  //       })
  //     }
  //     return range
  //   })

  //   const isFirstPage = computed(() => {
  //     return props.data?.current_page === 1
  //   })

  //   const isLastPage = computed(() => {
  //     return props.data?.current_page === props.data?.last_page
  //   })

  //   function onClickFirstPage() {
  //     emit('change', 1)
  //   }

  //   function onClickPreviousPage() {
  //     emit('change', props.data?.current_page - 1)
  //   }

  //   function onClickPage(page = 1) {
  //     emit('change', page)
  //   }

  //   function onClickNextPage() {
  //     emit('change', props.data?.current_page + 1)
  //   }

  //   function onClickLastPage() {
  //     emit('change', props.data?.last_page)
  //   }

  //   function isCurrent(page = 1) {
  //     return props.data?.current_page === page
  //   }

  //   return {
  //     firstPage,
  //     lastPage,
  //     pages,
  //     isFirstPage,
  //     isLastPage,
  //     onClickFirstPage,
  //     onClickPreviousPage,
  //     onClickPage,
  //     onClickNextPage,
  //     onClickLastPage,
  //     isCurrent,
  //   }
  // },
})
</script>
