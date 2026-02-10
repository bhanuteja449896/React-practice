import { useReducer } from "react";

function reducer(state, action) {
    switch(action.type) {
      case 'field': return {
        ...state,
        values: {...state.values, [action.key]: action.value},
        errors: {...state.errors, [action.key]: ''}
      };
      case 'submit':
        const errors = {};
        if(!state.values.name) errors.name = 'Req';
        if(!state.values.email.includes('@')) errors.email = 'Invalid';
        return {...state, errors};
      default: return state;
    }
  }


export default function Form() {
    const [state, dispatch] = useReducer(
        reducer, 
        {values: {name:'', email:''}, errors: {}}
    );
    const updateField = key => e => dispatch(
        {
            type: 'field', 
            key, 
            value: e.target.value
        }
    );
    return (
      <form>
        <input onChange={updateField('name')} placeholder="Name" /> <br /> <br />
        <span>{state.errors.name}</span>
        <input onChange={updateField('email')} placeholder="Email" /> <br /> <br />
        <span>{state.errors.email}</span>
        <button onClick={e => {e.preventDefault(); dispatch({type: 'submit'});}}>Submit</button>
      </form>
    );
  }