import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }
    //  this.clickHandler=this.clickHandler.bind(this)
    //  Binding in the class constructor 
    // }
    // clickHandler(){
    //     this.setState({
    //         message:'Good bye'
    //     })
    //     console.log(this)
     } 
    clickHandler=()=>{
        this.setState({
            message:'Good bye'
            // class property as arrow function
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button>
                // aproch one binding in the render method */}
               {/* <button onClick={()=> this.clickHandler()}>Click</button> 
                 //    using arrow fuction in the render method */}
                  <button onClick={this.clickHandler}>Click</button>
                
            </div>
    
               )
            }
        
}

export default EventBind
