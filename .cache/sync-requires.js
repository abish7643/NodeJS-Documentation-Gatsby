const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/abish/Desktop/Gatsby/Project-Documentation-Gatsby/.cache/dev-404-page.js"))),
  "component---src-templates-docs-js": hot(preferDefault(require("/home/abish/Desktop/Gatsby/Project-Documentation-Gatsby/src/templates/docs.js")))
}

