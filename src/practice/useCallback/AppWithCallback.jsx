import { useState, useCallback, memo } from 'react';

function AppWithCallback() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy milk', done: false },
    { id: 2, text: 'Walk dog', done: true },
    { id: 3, text: 'Code React', done: false },
    { id: 4, text: 'Learn Hooks', done: false }
  ]);
  const [filter, setFilter] = useState('');

  // ✅ WITH useCallback = SAME FUNCTION across renders
  const toggleTodo = useCallback((id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  }, [todos]);

  console.log('🟢 PARENT rendered');

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial', maxWidth: '500px' }}>
      <h2>✅ WITH useCallback</h2>
      <p style={{ color: '#666', fontSize: '14px' }}>
        Type in filter → <strong>ONLY PARENT re-renders!</strong>
      </p>
      
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="🔍 Type here (watch console!)"
        style={{
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          border: '2px solid #44ff44',
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
  console.log(`🟢 Todo "${todo.text}" RENDERED (GOOD!)`);
  
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '15px',
      border: '1px solid #ccffcc',
      borderRadius: '8px',
      marginBottom: '10px',
      backgroundColor: '#f5fff5'
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

export default AppWithCallback;
