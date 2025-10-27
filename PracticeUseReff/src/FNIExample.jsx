import { useRef } from "react";

function FNIExample() {
  const input1 = useRef();
  const input2 = useRef();

  const goToNext = () => {
    if(input1.current.value.trim() === ""){
        alert("Please fill the first input")
        input1.current.focus();
    } else {
        input2.current.focus();
    }
  };

  return (
    <div>
      <h3>Next Input Focus Example</h3>
      <input ref={input1} type="text" placeholder="First input" />
      <button onClick={goToNext}>Next</button>
      <input ref={input2} type="text" placeholder="Second input" />
    </div>
  );
}

export default FNIExample
