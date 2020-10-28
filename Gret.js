import React from 'react'

const Gret =props=>{
    console.log(props)
    return(
        <div>
    <h1>{props.name} also Known as {props.heroname}</h1>
    {props.children}
    </div>
    )
}



export default Gret



// export default Gret
