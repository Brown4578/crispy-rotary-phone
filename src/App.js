import React, { useState } from "react";


function App() {
  const[count, setcount]=useState(0);
  return (
   <div>
    <div>
      <h1>{count}</h1>

    </div>
    <div>
      <button
      onClick={() => setcount(count+1)}
      >Add+</button>
      <button
      onClick={() => setcount(count-1)}
      >Sub-</button>
    </div>

   </div>
  );
}

export default App;
