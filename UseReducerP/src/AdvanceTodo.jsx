import { useReducer } from "react"


const initialSatte = {
    todos: [],
    text: "",
    editingId: null
};

function reducer(state,action){
    switch(action.type){
        case "setText":
            return {...state , text: action.payload};

        case "add":
            if(!state.text.trim()) {
                alert("Please write todo")
                return state;
            }

          return {
            ...state,
            todos:[...state.todos, {id:Date.now() , text:state.text}],
            text:""
          }

          case "delete":
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            }; 

            case "edit":
                const todoToEdit = state.todos.find(
                    (todo) => todo.id === action.payload
                );
                 return {
                    ...state,
                    text: todoToEdit.text,
                    editingId: todoToEdit.id
                 };


                case "save":
                    return{
                        ...state,
                        todos: state.todos.map((todo) => 
                        todo.id === state.editingId ? {...todo, text: state.text} : todo
                        ),
                        text:"",
                        editingId:null
                    };

                    default:
                        return state;                   
    }
}




export default function AdvanceTodo(){
    const [state , dispatch] = useReducer(reducer , initialSatte);

    const handleSubmit = () => {
        if(state.editingId) {
            dispatch({type: "save"});
        } else {
            dispatch({type: "add"})
        }
    }

 return (
    <div style={{fontFamily: "Arial" , padding: "20px"}}>
     <h1 style={{color: "tomato"}}>📝 Todo App (useReducer)</h1>

     <input type="text" 
     value={state.text}
     onChange={(e) => 
        dispatch({type: "setText" , payload: e.target.value})
    }
    placeholder="Write your task..."
     />

     <button onClick={handleSubmit} style={{marginLeft: "10px"}}>
        {state.editingId ? "Save" : "Add"}
     </button>


     <ul style={{marginTop: "20px" , listStyle: "none", padding: "0"}}>
        {state.todos.map((todo) => (
            <li key={state.id} style={{marginBottom: "10px"}}>
                {todo.text}

                <button
                 onClick={() =>
                 dispatch({type: "edit" , payload: todo.id})
                }
                 style={{marginLeft: "10px"}}
                >Edit</button>

            <button
              onClick={() =>
                dispatch({ type: "delete", payload: todo.id })
              }
              style={{ marginLeft: "5px" }}
            >
               Delete
            </button>
            </li>
        ))}
     </ul>
    </div>
 )
}