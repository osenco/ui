export const data = {
  "key": "v-5d7259d4",
  "path": "/guide.html",
  "title": "Getting Started",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guide.md",
  "git": {
    "updatedTime": 1619297524000,
    "contributors": [
      {
        "name": "Mauko Maunde",
        "email": "maukoese@gmail.com",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
