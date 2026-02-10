import { useState, useEffect, useCallback, memo } from 'react';

const Display = memo(({ value }) => {
  console.log('Display render');
  return <p>Value: {value}</p>;
});

function Timer() {
  const [tick, setTick] = useState(0);
  const increment = useCallback(() => setTick(t => t + 1), []);
  useEffect(() => {
    const id = setInterval(increment, 1000);
    return () => clearInterval(id);
  }, [increment]);
  return <Display value={tick} />;
}
