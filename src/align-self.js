const { is } = require('./util')

module.exports = props => is(props.alignSelf) ? { alignSelf: props.alignSelf } : null

