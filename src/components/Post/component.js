import Component from 'inferno-component'
import { Link } from 'inferno-router'
import { object, number, func } from 'prop-types'

import Loading from '../common/Loading'

class Post extends Component {
    static propTypes = {
        count: number.isRequired,
        featch1: func.isRequired,
        featch2: func.isRequired,
        onClick: func.isRequired,
        params: object.isRequired,
        post: object.isRequired,
    }

    componentDidMount() {
        this.props.fetch1(this.props.params.id)
    }

    render() {
        const { id } = this.props.params
        const { post } = this.props

        if (!post.title) return <Loading body={id} />

        return (
            <div>
                <Link to="/">Home</Link>
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
