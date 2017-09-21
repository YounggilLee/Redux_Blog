import React , { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { fetchPost, deletPost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount(){
        this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick() {
        this.props.deletPost(this.props.params.id)
        .then(() => {
            this.context.router.push('/');
        });
    }


    render() {
        const { post } = this.props

        if(!post) {
            return <div>Loading... </div>
        }

       // console.log(this.props.post);
        return (
            <div>
                <Link to='/'>Back To Index</Link>
                    <button 
                        className='btn btn-danger pull-xs-right'
                        onClick={this.onDeleteClick.bind(this)}>
                        Delete Post
                    </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return { post: state.posts.post };
}

export default connect(mapStateToProps, {fetchPost, deletPost}) (PostsShow);