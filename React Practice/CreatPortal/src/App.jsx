// import { createPortal } from "react-dom"

// import PortalTest from "./PortalTest";
import { useState } from "react";
import Model from "./Model";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{padding: "30px"}}>
      <h1>App Component</h1>
      {/* <PortalTest /> */}

      {/* {createPortal(<h1>Portal</h1>,document.body)} */}

      <button onClick={() => setOpen(true)}>Open Model</button>
      <Model isOpen={open} onClose={() => setOpen(false)}>
        <h2>Hello From Model</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur 
        </p>
      </Model>
    </div>
  );
}

export default App;
