import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

export const pagesRoutes = [
  {
    name: "v-8daa1a0e",
    path: "/",
    component: Vuepress,
    meta: { title: "" },
  },
  {
    path: "/index.html",
    redirect: "/",
  },
  {
    path: "/README.md",
    redirect: "/",
  },
  {
    name: "v-5d7259d4",
    path: "/guide.html",
    component: Vuepress,
    meta: { title: "Getting Started" },
  },
  {
    path: "/guide.md",
    redirect: "/guide.html",
  },
  {
    name: "v-1020f180",
    path: "/components/",
    component: Vuepress,
    meta: { title: "Components" },
  },
  {
    path: "/components/index.html",
    redirect: "/components/",
  },
  {
    path: "/components/README.md",
    redirect: "/components/",
  },
  {
    name: "v-45da7438",
    path: "/components/container.html",
    component: Vuepress,
    meta: { title: "container" },
  },
  {
    path: "/components/container.md",
    redirect: "/components/container.html",
  },
  {
    name: "v-3706649a",
    path: "/404.html",
    component: Vuepress,
    meta: { title: "" },
  },
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress,
  },
]
