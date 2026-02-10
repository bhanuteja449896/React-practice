import { useRef } from 'react';

export default function FocusInput() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} placeholder="Type here" />
      <button onClick={handleFocus}>Focus</button>
    </>
  );
}
