import React, {useReducer} from 'react';
import {StateProvider} from './context'
import Demo from './components/DemoComponent'
function App() {
  const initialState = {
    name: 'Eric',
    activity:'Crusing it',
    people: []
  };
  const reducer = (state, action) => {
    const {name, activity, people} = action;
    switch (action.type){
      case "CHANGE_NAME":
        return {...state, name}
      case "CHANGE_ACTION":
        return {...state, activity}
      case "ADD_PERSON":
        return {...state, people}
      case "UPDATE_PERSON":
        return {...state, people}
      default:
        return state
    }
  }
  return (
    <div className="App">
      <StateProvider value={useReducer(reducer,initialState)}>
        <h1>A thing</h1>
        <Demo />
      </StateProvider>
    </div>
  );
}

export default App;
