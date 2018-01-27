import Component from 'inferno-component'
import { connect } from 'inferno-redux'
import { Link } from 'inferno-router'

import Loading from '../common/Loading'
import * as client from '../../api/client'

class Post extends Component {
  state = {
    post: {},
  }

  async componentDidMount() {
    const post = await client.getPost(this.props.params.id)
    this.setState({ post })
  }

  render() {
    const { id } = this.props.params
    if (!this.state.post.title) return <Loading body={id} />

    return (
      <div>
        <Link to="/">Home</Link>
        <h3>Post {id}</h3>
        {/*<p>{JSON.stringify(this.state.post, null, 2)}</p>*/}
        <h4>"{this.state.post.title}"</h4>
        <p>{this.state.post.body}</p>
        <button onClick={this.props.onClick}>! {this.props.count}</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.post.count,
})
const mapDispatchToProps = {
  onClick: e => ({ type: 'TEST_ACTION_onClick', e }),
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
