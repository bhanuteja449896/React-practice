import { useRef, useEffect } from 'react';

export default function Focus() {
  const inputRef = useRef(null);  // Box to hold input element

  const focusInput = () => {
    inputRef.current.focus();  // .current = the actual <input>
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h2>useRef: Auto Focus Input</h2>
      
      <input
        ref={inputRef}  // Attach ref to input
        placeholder="Click button → I get focus!"
        style={{
          padding: '15px',
          fontSize: '18px',
          borderRadius: '8px',
          border: '2px solidrgb(255, 0, 0)',
          width: '300px'
        }}
      />
      
      <br /><br />
      <button 
        onClick={focusInput}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Focus Input
      </button>
    </div>
  );
}