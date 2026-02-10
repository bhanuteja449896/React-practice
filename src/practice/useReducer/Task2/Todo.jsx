import {useReducer, useState} from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return {
        todos: [...state.todos, {text: action.text, done: false}],
      };
    case 'toggle':
      return {
        todos: state.todos.map((todo, i) =>
          i === action.index ? {...todo, done: !todo.done} : todo
        ),
      };
    default:
      throw new Error();
  }
}

export default function Todos() {
    const [state, dispatch] = useReducer(reducer, {todos: []});
    const [text, setText] = useState('');
    return (
      <div>
        <input value={text} onChange={e => setText(e.target.value)} />
        <button onClick={() =>{
            dispatch({type: 'add', text}); 
            setText('');}
            }>Add</button>
        <ul>
          {state.todos.map((todo, i) => (
            <li key={i} onClick={() => dispatch(
                {
                    type: 'toggle', 
                    index: i
                })} style={{textDecoration: todo.done ? 'line-through' : 'none'}}>
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
