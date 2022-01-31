import React, {useState} from 'react';

export function Counter() {
  const [data, setData] = useState(0);
  
  const incrementCounter=()=> {
    setData(data +1)    
  }
    return (
      <div>
        <h1>Counter</h1>
        <p>This is a simple example of a React component.</p>
        <p aria-live="polite">Current count: <strong>{data}</strong></p>

        <button className="btn btn-primary" onClick={incrementCounter}>Increment</button>
      </div>
    );
  }
