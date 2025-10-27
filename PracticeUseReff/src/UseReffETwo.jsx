import { useEffect , useRef } from "react"

function UseReffETwo() {
    const inputRef = useRef();

    useEffect( () => {
        inputRef.current.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

  return (
    <div>
      <h3>Auto Focus Example</h3>
      <input type="text" 
      ref={inputRef}
      placeholder="Auto focus on load"
      />
    </div>
  )
}

export default UseReffETwo
