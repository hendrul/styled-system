
const REG = /^([mpfw][trblxy]?|width|alignSelf|fontSize|color|bg)$/

module.exports = props => {
  const next = {}

  for (let key in props) {
    if (REG.test(key)) {
      continue
    }
    next[key] = props[key]
  }

  return next
}
