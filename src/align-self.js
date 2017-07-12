const { is } = require('./util')

module.exports = props => is(props.alignSelf) ? { 'align-self': props.alignSelf } : null

