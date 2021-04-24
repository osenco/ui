import { defineAsyncComponent } from 'vue'

export const pagesComponent = {
  "/": defineAsyncComponent(() => import(/* webpackChunkName: "v-8daa1a0e" */"/home/osen/Projects/Vue/ui/docs/.vuepress/.temp/pages/index.html.vue")),
  "/guide.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-5d7259d4" */"/home/osen/Projects/Vue/ui/docs/.vuepress/.temp/pages/guide.html.vue")),
  "/components/": defineAsyncComponent(() => import(/* webpackChunkName: "v-1020f180" */"/home/osen/Projects/Vue/ui/docs/.vuepress/.temp/pages/components/index.html.vue")),
  "/components/container.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-45da7438" */"/home/osen/Projects/Vue/ui/docs/.vuepress/.temp/pages/components/container.html.vue")),
  "/404.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-3706649a" */"/home/osen/Projects/Vue/ui/docs/.vuepress/.temp/pages/404.html.vue")),
}
