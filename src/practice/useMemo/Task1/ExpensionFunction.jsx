import { useState, useMemo } from 'react';

function expensiveCalc(num) {
  let result = 0;
  for(let i=1; i<10000; i++) result += i; // Slow!
  return Math.floor(result);
}

export default function ExpensiveFunction() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calc = useMemo(() => expensiveCalc(count), [count]);
  return (
    <div>
      <p>Calc: {calc}</p>
      <button onClick={() => setCount(c => c + 1)}>Inc ({count})</button>
      <button onClick={() => setTodos([...todos, 'new'])}>Add Todo ({todos.length})</button>
    </div>
  );
}
