/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ actions }) => {
  console.time("test")
  debugger
  for (let i = 0; i < 1000; i++) {
    console.log(`test #${i}`)
  }
  debugger
  console.timeEnd("test")
  process.exit()
}
