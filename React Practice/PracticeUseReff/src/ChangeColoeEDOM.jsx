import { useRef } from "react";

function ChangeColorDOM() {
  const boxRef = useRef();
  const isTomato = useRef(false); 

  const changeColor = () => {
    if (isTomato.current) {

      boxRef.current.style.backgroundColor = "gray";
      boxRef.current.style.color = "black";
      boxRef.current.style.padding = "10px";
      isTomato.current = false;
    } else {
      
      boxRef.current.style.backgroundColor = "tomato";
      boxRef.current.style.color = "white";
      boxRef.current.style.padding = "20px";
      isTomato.current = true;
    }
  };

  return (
    <div>
      <h3>Direct DOM Target Example (Toggle Color)</h3>
      <div
        ref={boxRef}
        style={{
          backgroundColor: "gray",
          padding: "10px",
          borderRadius: "5px",
          transition: "0.3s",
        }}
      >
        Hello Rizwan
      </div>
      <br />
      <button onClick={changeColor}>Change Box Color</button>
    </div>
  );
}

export default ChangeColorDOM;

