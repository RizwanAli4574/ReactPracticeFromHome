import { createContext , useReducer } from "react";
import Question from "../Data/Questions.json"

// eslint-disable-next-line react-refresh/only-export-components
export  const QuizContext = createContext();

const initialState = {
    username : "",
    index:0,
    score:0,
    completed:false,
    Question 
}

function quizReducer(state , action){
    switch(action.type){
        case "SET_NAME":
            return {
                ...state,
                username : action.payload
            }
            case "ANSWER":
                return{
                    ...state,
                    score: action.payload ? state.score + 1 : state.score,
                    index: state.index + 1
                }
                case "FINISH":
                    return {
                        ...state,
                        completed : true
                    }
                    case "RESET":
                        return {
                            ...initialState,
                           Question : state.Question 
                        }

            default : 
            return state;
    }

}

export default function QuizProvider({children}){

    const [state , dispatch] = useReducer(quizReducer , initialState)

    return (
        <QuizContext.Provider value={{state , dispatch}}>
            {children}
        </QuizContext.Provider>
    )
}