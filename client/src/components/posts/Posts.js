import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPosts } from '../../actions/posts'
import Spinner from '../layout/Spinner'
import PostItem from './PostItem'

const Posts = ({ getPosts, posts: { posts, loading } }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts])
    return loading ? <Spinner /> : (
        <Fragment>
            <h1 className="large text-primary">Posts</h1>
            <p className="lead">
                <i className="fas fa-user"></i> Welcome to the Community
            </p>
            <div className="posts">
                {posts.map((post) => (
                    <PostItem key={post._id} post={post} />
                ))}
            </div>
        </Fragment>
    )
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
    posts: state.posts
})
export default connect(mapStateToProps, { getPosts })(Posts)
