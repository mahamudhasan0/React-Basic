import React from 'react'

function FunctionClick () {
   function clickHandler(){
        console.log('push me up')
    }
    return (
        <div>
            <button onClick={clickHandler}>Push me</button>
            
        </div>
    )
} 

export default FunctionClick
