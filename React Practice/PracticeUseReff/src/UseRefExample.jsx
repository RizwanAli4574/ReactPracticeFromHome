import { useRef, useState, useEffect } from "react";

function UseRefExample() {
  const [name, setName] = useState("");
  const renders = useRef(0); 
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current){
        isFirstRender.current = false;
    } else {
         renders.current = renders.current + 1 
    }
   
  });

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>My name is: <strong>{name}</strong></p>
      <p>This component rendered {renders.current} times.</p>
    </div>
  );
}
export default UseRefExample