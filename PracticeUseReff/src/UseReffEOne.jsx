import { useRef } from "react";

function UseReffEOne() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <br/>
      <br/>
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default UseReffEOne
