import Component from 'inferno-component'
import { connect } from 'inferno-redux'
import { Link } from 'inferno-router'

import Post from './component'
import * as actions from './actions'
import * as sagas from './sagas'

const mapStateToProps = state => ({
  count: state.post.count,
  post: state.post.post,
})
const mapDispatchToProps = {
  onClick: e => ({ type: 'TEST_ACTION_onClick', e }),
  fetch1: actions.FetchPost,
  fetch2: sagas.FetchPost,
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
