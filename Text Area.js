import React, { Component } from 'react'

class Text extends Component {
	constructor(){
		super();
		this.state={
			desc:"Please Insert some Text",
			userInput:""
		}
	}
	onChangeHandler=(event)=>{
		var mytext=event.target.value;
		this.setState({userInput:mytext})
	}
	render() {
		return (
			<div>
				<textarea placeholder="Your message" onChange={this.onChangeHandler}/>
		        <p>{this.state.userInput}</p>
				
			</div>
		)
	}
}

export default Text
