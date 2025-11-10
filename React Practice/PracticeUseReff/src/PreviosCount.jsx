import {useRef , useState ,useEffect} from "react"

function PreviosCount() {
    const [count , setCount] = useState(0);
    const PoraniValue = useRef();

    useEffect( () => {
        PoraniValue.current = count
    })
  return (
    <div style={{padding:"20px"}}>
        <h3>Tracking State Changes</h3>
        <p>Current Count : {count}</p>
        <p>Previous Count : {PoraniValue.current}</p>

        <br/>
        <br/>

        <button onClick={() => setCount(count + 1)}>Increase</button>
      
    </div>
  )
}

export default PreviosCount
