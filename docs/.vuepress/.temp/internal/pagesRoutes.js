import { Vuepress } from '@vuepress/client/lib/components/Vuepress'
import pageRoutes0 from '/home/osen/Projects/Vue/ui/docs/.vuepress/.temp/internal/pageRoutes/v-8daa1a0e.js'
import pageRoutes1 from '/home/osen/Projects/Vue/ui/docs/.vuepress/.temp/internal/pageRoutes/v-5d7259d4.js'
import pageRoutes2 from '/home/osen/Projects/Vue/ui/docs/.vuepress/.temp/internal/pageRoutes/v-1020f180.js'
import pageRoutes3 from '/home/osen/Projects/Vue/ui/docs/.vuepress/.temp/internal/pageRoutes/v-45da7438.js'
import pageRoutes4 from '/home/osen/Projects/Vue/ui/docs/.vuepress/.temp/internal/pageRoutes/v-3706649a.js'

export const pagesRoutes = [
  ...pageRoutes0,
  ...pageRoutes1,
  ...pageRoutes2,
  ...pageRoutes3,
  ...pageRoutes4,
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress,
  },
]
