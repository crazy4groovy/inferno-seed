import Component from 'inferno-component'
import { Link } from 'inferno-router'

import Loading from '../common/Loading'
import * as client from '../../api/client'

class Posts extends Component {
  state = {
    posts: null,
  }

  componentDidMount() {
    client
      .getPosts()
      .then(posts => this.setState({ posts }))
      .catch(console.log)
  }

  render() {
    if (!this.state.posts) return <Loading />

    return (
      <div>
        <h2 class="posts">Posts:</h2>
        <ul>
          {this.state.posts.map(post => (
            <li key={post.id}>
              {post.title} <i>"{post.body}"</i>{' '}
              <Link to={`/${post.id}`}>link</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Posts
