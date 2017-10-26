import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'
import PropTypes from 'prop-types'
import { loadArticleComments} from '../AC'
import {connect} from 'react-redux'
import Loader from './Loader'

class CommentList extends Component {
    static defaultProps = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    // componentDidMount() {
    //     console.log('---', 'mounted')
    // }

    // componentWillUnmount() {
    //     console.log('---', 'unmounting')
    // }

    // componentDidUpdate() {
    //     console.log('---', 'updated')
    // }

    // componentWillReceiveProps(nextProps){
    //   if (nextProps.isOpen && !this.props.isOpen) nextProps.loadComment(this.props.articleId)
    // }
    componentWillReceiveProps({ isOpen, article, loadArticleComments }) {
      if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
          loadArticleComments(article.id)
      }
  }


    render() {
        const {isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { article: {comments, id, commentsLoading, commentsLoaded}, isOpen } = this.props
        if (!isOpen) return null

        if (commentsLoading) return <Loader />
        if (!commentsLoaded) return null


        const body = comments.length ? (
            <ul>
                {comments.map(id => <li key = {id}><Comment id = {id} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
                <CommentForm articleId = {id} />
            </div>
        )
    }
}


export default connect(null, {loadArticleComments})(toggleOpen(CommentList))