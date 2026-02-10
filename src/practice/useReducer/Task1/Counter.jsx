// Task 1 – Counter
// Question: Increment/decrement/reset counter.

import { useReducer } from "react";

// function reducer(state,action){
//     switch(action.type){
//         case 'inc':
//             return {count:state.count + 1}
//         case 'dec':
//             return {count:state.count - 1}
//         default:
//             return state;
//     }
// }

// export default function Counter(){
//     const [state,dispatch] = useReducer(reducer,{count:0})

//     return(
//         <>
//             <h1>Count : {state.count} </h1>
//             <button onClick={()=>{
//                 dispatch({
//                     type:'inc'
//                 })
//             }}>+</button>
//             <button onClick={()=>{
//                 dispatch({
//                     type:'dec'
//                 })
//             }}>-</button>
//         </>
//     )

// }


function myReducer(state,action){
    switch(action){
        case 'inc':
            return state + 1;
        case 'dec':
            return state - 1;

    }
}

export default function Counter(){
    const [state,dispatch] = useReducer(myReducer,0);
    return(
        <>
            <h1>Count : {state}</h1>
            <button onClick={()=>{
                dispatch('inc')
            }}>+</button>
            <button onClick={()=>{
                dispatch('dec')
            }}>-</button>
        </>
    )
}