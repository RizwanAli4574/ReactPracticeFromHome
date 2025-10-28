// with use only useReducer

import { useReducer } from "react";

const initialState = {
    todos: [] ,
    text: ""
}

function reducer(state , action){
    switch(action.type){
        case "setText" :
            return {...state, text: action.payload};

            case "add" : 
            if (!state.text.trim()) {
              alert("Please write something!");
              return state;
            }
            
            return {
                ...state,
                todos:[...state.todos , {id : Date.now() , text: state.text}],
                text: ""
            };

            case 'delete' : 
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };

            default: return state
    }
}

export default function SimpleTodo() {
    const [state, dispatch] = useReducer(reducer , initialState)
  return (
    <div>
      <h1 style={{color:"red"}}>Todo List</h1>

      <input 
      type="text" 
      value={state.text}
      onChange={e => dispatch({type: "setText" , payload: e.target.value})}
      />
      <button onClick={() => dispatch({type: "add"})}>Add</button>

      <ul>
        {state.todos.map(todo => (
            <li key={todo.id}>
                {todo.text}
                <button onClick={() => dispatch({type: "delete" , payload: todo.id})}>Delete</button>
                
            </li>
        ))}
      </ul>
    </div>
  )
}







// With use UseReducer and UseState


// import { useReducer, useState } from "react";

// function reducer(state, action) {
//   switch (action.type) {
//     case "add":
//       return [...state, { id: Date.now(), text: action.payload }];

//     case "delete":
//       return state.filter((todo) => todo.id !== action.payload);
//     default:
//       return state;
//   }
// }

// function SimpleTodo() {
//   const [todos, dispatch] = useReducer(reducer, []);
//   const [text, setText] = useState("");

//   const addTodo = () => {
//     dispatch({ type: "add", payload: text });
//     setText("");
//   };

//   return (
//     <div>
//       <h2>Todo List</h2>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => {
//           setText(e.target.value);
//         }}
//       />
//       <button onClick={addTodo}>Add</button>

//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {todo.text}
//             <button
//               onClick={() => dispatch({ type: "delete", payload: todo.id })}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SimpleTodo;
