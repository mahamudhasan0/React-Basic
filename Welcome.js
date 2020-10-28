import React,{Component, component} from 'react'

class Welcome extends Component{
    render(){
        return <h1>Welcome {this.props.name} also knows as {this.props.heroname}</h1>
    }

}
export default Welcome