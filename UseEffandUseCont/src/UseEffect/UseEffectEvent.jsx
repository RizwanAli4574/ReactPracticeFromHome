// import { useState, useEffect, useEffectEvent } from "react";

// function UseEffectEvent() {
//   const [count, setCount] = useState(0);

//   // const handleIncrease = () => {
//   //     setCount(count + 1)
//   // }

//   // const handleDiscrease = () => {
//   //     setCount(count - 1)
//   // }

//   const timer = useEffectEvent(() => {
//     console.log("count :", count);
//     setCount((c) => c + 1);
//   });

//   useEffect(() => {
//     const id = setInterval(() => {
//       timer();
//     }, 1000);

//     return () => clearInterval(id);
//   }, []);

//   return (
//     <>
//       <h2>Count {count}</h2>
//       {/* <button onClick={handleIncrease}>Increase</button>
//     <br/>
//     <br/>
//     <button onClick={handleDiscrease}>Discrease</button> */}
//     </>
//   );
// }

// export default UseEffectEvent;


import { useState , useEffect ,useEffectEvent } from "react"

function AutoSaveForm() {

    const [ formdata , setFormdata] = useState({name: "" , email:""})

  const save =  useEffectEvent( () => {
                console.log("Form Data :", formdata)
            })

    useEffect( () => {
        const interval = setInterval( () => {
           save();
        }, 3000)

        return () => clearInterval(interval)
    },[])


  return (
    <div>
      <form>
        <input 
        type="text" 
        placeholder="Nmae" 
        value={formdata.name}
        onChange={e => setFormdata({...formdata,name: e.target.value})}
        />

        <br />
        <br />

        <input 
        type="text" 
        placeholder="Email" 
        value={formdata.email}
         onChange={e => setFormdata({...formdata,email: e.target.value})}
        />

       
       
      </form>
    </div>
  )
}

export default AutoSaveForm
