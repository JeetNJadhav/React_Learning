import { useReducer } from "react"

type State = {
    count: number
}

type Action = {type: 'INCREMENT'} | {type: 'DECREMENT'} 


const initialState : State = {
    count: 0
}

const reducer = (state: State, action: Action) => {
    switch(action.type){
        case 'INCREMENT':
            return {...state, count: state.count +1};
        case 'DECREMENT':
            return {...state, count: state.count -1};
        default: 
            return state;
    }
}

export const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return <div><h3>Counter using useReducer</h3>
    <div>Counter: {state.count}</div>
    <button onClick={() => dispatch({type: 'INCREMENT'})}>Incr</button>
    <button onClick={() => dispatch({type: 'DECREMENT'})}>decr</button></div>
}
