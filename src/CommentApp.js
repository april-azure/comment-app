import React, {Component} from 'react'
import CommentList from './CommentList'
import CommentInput from './CommentInput'

class CommentApp extends Component{
	constructor(){
		super()
		this.state = {
			comments : []
		}
	}

	handleSubmit(comment){
		console.log(comment)
		if(!comment) return 
		if(!comment.username) return alert('please input username')
		if(!comment.content) return alert('please input content')
		this.state.comments.push(comment)
		this.setState(this.state.comments)
	}

	render(){
		return(
			<div className = 'wrapper'>
				<CommentInput onSubmit = {this.handleSubmit.bind(this)}/>
				<CommentList comments = {this.state.comments}/>
			</div>
		)
	}
}

export default CommentApp