import {useReducer} from 'react'

function Form() {

    function reducer(state,action){
        return {
            ...state , 
            [action.name] : action.value
        }
    }

    const [formData , dispatch] = useReducer(reducer , {
        userName : "" ,
        email : ""
    })


    const handleChange = (e) => {
        dispatch({
        name : e.target.name ,
        value : e.target.value })
    }


  return (
   <form >
    <input type="text" name="userName" placeholder='username'
     value={formData.userName}
     onChange={handleChange}
    />
    
    <input type="text" name='email' placeholder='email' 
     value={formData.email}
     onChange={handleChange}
    />

    <p>
        {formData.userName} - {formData.email}
    </p>
   </form>
  )
}

export default Form
