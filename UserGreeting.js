import React, { Component } from 'react'

 class UserGreeting extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn:true
         }
     }
     
    render() {

        //4 aproach of Conditional Rendering

    //    Short circuit operator
    //    return this.state.isLoggedIn && <div>Welcome to React</div>




             //Ternary conditional operator
            //  return this.state.isLoggedIn?(
            // <div>Welcome to React</div>
            // ):
            // (
            // <div>Welcome Guest</div>)
        




         //Element variables
        // let message
        // if(this.state.isLoggedIn){
        //     message=<div>Welcome to React</div>
        // }else{
        //     message=<div>Welcome Guest</div>
        // }
        // return <div>{message}</div>



        //if/else
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome to React</div>
        //     )
        // }
        // else{
        //     return(
        //     <div>Welcome Guest</div>
        //     )
        
        // return (
        //     <div>
        //       <div>Welcome to React </div> 
        //        <div>Welcome Guest</div> 
        //     </div>
        // )
    }
}

export default UserGreeting
