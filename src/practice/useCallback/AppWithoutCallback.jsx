import { useState, memo } from 'react';

function AppWithoutCallback() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy milk', done: false },
    { id: 2, text: 'Walk dog', done: true },
    { id: 3, text: 'Code React', done: false },
    { id: 4, text: 'Learn Hooks', done: false }
  ]);
  const [filter, setFilter] = useState('');

  // ❌ WITHOUT useCallback = NEW FUNCTION every render
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  console.log('🔵 PARENT rendered');

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial', maxWidth: '500px' }}>
      <h2>❌ WITHOUT useCallback</h2>
      <p style={{ color: '#666', fontSize: '14px' }}>
        Type in filter → <strong>ALL todos re-render every keystroke!</strong>
      </p>
      
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="🔍 Type here (watch console!)"
        style={{
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          border: '2px solid #ff4444',
          borderRadius: '8px',
          marginBottom: '20px'
        }}
      />

      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
      ))}
    </div>
  );
}

const TodoItem = memo(({ todo, onToggle }) => {
  console.log(`🔴 Todo "${todo.text}" RENDERED (BAD!)`);
  
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '15px',
      border: '1px solid #ffcccc',
      borderRadius: '8px',
      marginBottom: '10px',
      backgroundColor: '#fff5f5'
    }}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
        style={{ marginRight: '15px', width: '20px', height: '20px' }}
      />
      <span style={{
        textDecoration: todo.done ? 'line-through' : 'none',
        fontSize: '16px'
      }}>
        {todo.text}
      </span>
    </div>
  );
});

export default AppWithoutCallback;
