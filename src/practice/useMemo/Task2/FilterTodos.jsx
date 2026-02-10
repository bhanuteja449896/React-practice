import { useState, useMemo, memo } from 'react';

const List = memo(({ items }) => {
  console.log('List render');
  return <ul>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>;
});

export default function FilterTodos() {
  const [todos, setTodos] = useState(['Task 1', 'Task 2']);
  const [tab, setTab] = useState('all');
  const visible = useMemo(() => {
    if(tab === 'all') return todos;
    return todos.filter(t => t.includes(tab === 'done' ? 'done' : 'urgent'));
  }, [todos, tab]);
  return (
    <div>
      <button onClick={() => setTab('all')}>All</button>
      <button onClick={() => setTab('urgent')}>Urgent</button>
      <List items={visible} />
    </div>
  );
}
