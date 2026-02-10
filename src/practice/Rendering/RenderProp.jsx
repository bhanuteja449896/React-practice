// Create Counter component that:

// Holds state count.

// Accepts render prop.

// Calls render(count, increment) where increment is a function to increase count.


import { useState } from 'react';

function Counter({ render }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(c => c + 1);

  return render(count, increment);
}

export default function RenderProp() {
  return (
    <Counter
      render={(count, increment) => (
        <div>
          <p>Count: {count}</p>
          <button onClick={increment}>+</button>
        </div>
      )}
    />
  );
}
