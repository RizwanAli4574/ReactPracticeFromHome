 import React , {useMemo, useState}from 'react'

function Parent() {

    const [count , setCount] = useState(0)

    const user = useMemo( () => ({name : "Rizwan Ali" , age : 26}) , [])

    console.log("Parent rendered")
  return (
    <div>
        <h1>Parenct Count : {count}</h1>
        <button onClick={ () => setCount(count + 1)}>Increase Count</button>
        <Child user={user} />
    </div>
  )
}

const Child = React.memo(({user}) => {
    console.log("Child Render")
    return <h3>User : {user.name}</h3>
})


export default Parent
