import React from 'react'
import Person from './Person'

function NameList() {
    const persons=[
        {
            id:1,
            name:'Mahamud',
            age:22,
            skill:'React'
        },
        {
            id:1,
            name:'Hasan',
            age:22,
            skill:'React'
        },
        {
            id:1,
            name:'Mithoon',
            age:22,
            skill:'React'
        },
    ]
    const personList = persons.map(person=> <Person person={person} />)

    return <div>{personList}</div>
      
}

export default NameList
