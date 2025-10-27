import { useRef, useState } from "react";

function ErrorFocus() {
    const inputRef = useRef();
    const [ error , setError] = useState();

    const handleSubmit = () => {
        if (inputRef.current.value.trim() === '')
        {
            setError('Please enter your name')
            inputRef.current.focus();
        } else {
            setError ("");
            alert("Form Submitted !")
        }
    }
  return (
    <div>
      <h3>Form Focus Example</h3>
      <input type="text" 
       ref={inputRef}
       placeholder="Enter Your Name"
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p style={{color : "red"}}>{error}</p>}
    </div>
  )
}

export default ErrorFocus
