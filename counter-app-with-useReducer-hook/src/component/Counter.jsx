import { useReducer } from 'react'

const initialState = { count : 0 };

const reducer = ( state, action )=>{
    switch (action.type) {
        case 'increment':
            return { ...state, count : state.count + 1 };
        
            case 'decrement':
            return { ...state, count : state.count - 1 };

            case 'increaseByAmount':
            return { ...state, count : state.count + action.payload };
            
            case 'decreaseByAmount':
            return { ...state, count : state.count - action.payload };
            
            case 'reset':
            return { ...state, count : 0 };
    
        default:
            return state;
    }
}

const Counter = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div style={{ margin : '30px' }}>
      <h1>Counter App with useReducer</h1>
        <h1 style={{ fontSize : '50px' }}> Count : { state.count }</h1>
        <button style={{ padding : '10px', margin : '0px 10px 0px 0px' }} onClick={()=> dispatch({ type : 'increment' })}>+</button>
        <button style={{ padding : '10px', margin : '0px 10px 0px 0px' }} onClick={()=> dispatch({ type : 'decrement' })}>-</button>
        <button style={{ padding : '10px', margin : '0px 10px 0px 0px' }} onClick={()=> dispatch({ type : 'increaseByAmount', payload : 2 })}>Increase 2 number</button>
        <button style={{ padding : '10px', margin : '0px 10px 0px 0px' }} onClick={()=> dispatch({ type : 'decreaseByAmount', payload : 2  })}>Decrease 2 number</button>
        <button style={{ padding : '10px', margin : '0px 10px 0px 0px' }} onClick={()=> dispatch({ type : 'reset' })}>reset</button>
    
    </div>
  )
}

export default Counter