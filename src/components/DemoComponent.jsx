import React, {useContext, useState} from 'react'
import {StateContext} from '../context/index'

const Demo =()=>{
    const [value, dispatch] = useContext(StateContext);
    const [input, setInput] = useState('')
    const { name, activity, people } = value
    const _handleChange =(name) =>{
        setInput(name)
    }
    const _handleSubmit= (e) =>{
        e.preventDefault()
        dispatch({type:"CHANGE_NAME", name:input})
        setInput('')
    }

    const _handleClick=(e, activity)=>{
        e.preventDefault()
        dispatch({type:"CHANGE_ACTION", activity:activity})
    }

    const _handleAdd= e =>{
        e.preventDefault()
        dispatch({type:"ADD_PERSON", people: [...people,{name:name, activity: activity}]})
    }
    const _handleListChange = (id, activity) => {
        let newArr = [...people]
        newArr[id] = {...newArr[id], activity:activity}
        dispatch({type:"UPDATE_PERSON", people:newArr})
    }
    return (
        <>
            <h1>Welcome {name} you are {activity}</h1>
            <form onSubmit={e=> _handleSubmit(e)}>
                <label >Enter new person
                    <input type='text' name='newPerson' placeholder='New Person' value={input} onChange={(event)=>_handleChange(event.target.value)}/>
                </label>
                <button type='submit' onSubmit={(e)=>_handleSubmit(e)}>Submit</button>
                <select onChange={(event)=>_handleClick(event, event.target.value)}>
                    <option selected disabled>Crushing it</option>
                    <option>eating</option>
                    <option>sleeping</option>
                    <option>playing</option>
                </select>
                <button type="button" onClick={(e)=>_handleAdd(e)}>Add person</button>
            </form>
            <ul>
                {people && people.length ? people.map((person, index) => {
                    return <li key={index}>
                        {person.name} is {person.activity}
                        <select onChange={(e)=>_handleListChange(index, e.target.value)}>
                            <option selected disabled>--</option>
                            <option >eating</option>
                            <option>sleeping</option>
                            <option>playing</option>
                        </select>
                    </li>
                }):null}
            </ul>
        </>
    )
}   

export default Demo