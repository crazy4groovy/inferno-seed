import Component from 'inferno-component'
import { Link } from 'inferno-router'

// import { propTypes} from './propTypes'
import Loading from '../common/Loading'
import routes from '../../routes'

class Post extends Component {
    // static propTypes = propTypes

    componentDidMount() {
        this.props.fetch1(this.props.params.id)
    }

    render() {
        const { id } = this.props.params
        const { post } = this.props

        if (!post.title) return <Loading body={id} />

        return (
            <div>
                <Link to={routes.home}>Home</Link>
                <h3>Post {id} <button onClick={() => this.props.fetch1(id)}>[@action]</button></h3>
                <button onClick={() => this.props.fetch2(id)}>[@saga]</button>
                <h4>"{post.title}"</h4>
                <p>{post.body}</p>
                <button onClick={this.props.onClick}>! {this.props.count}</button>
            </div>
        )
    }
}

export default Post
