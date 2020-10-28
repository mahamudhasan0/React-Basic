import React,{Component, } from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'Welcome to visit'
        }
    }
    changeMessage(){
        this.setState({
            message:"Thank YOU for visit"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Click</button>

            </div>
        ) 
        }

}
export default Message