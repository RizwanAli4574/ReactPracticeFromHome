import {  useContext } from "react"
import { useNavigate } from "react-router-dom"
import { QuizContext } from "../Context/QuizContext"
import Progressbar from "../Components/Progressbar"
import QuestionCard from "../Components/QuestionCard"
import Timer from "../Components/Timer"
import useTimer from "../Hooks/useTimer"


function Quiz() {
  const {state , dispatch} = useContext(QuizContext)
  const {index, Question } = state;
  const navigate = useNavigate();
  const {time , reset} = useTimer(10);

  if(!Question  || Question .length === 0) {
    return <h2 className="text-center mt-5">Loading Question...</h2>
  }

  if(index >= Question .length){
    dispatch({type : "FINISH"})
    navigate("/result")
    return null;
  }

  const current = Question[index]

  const handleSelect = (option) => {
    dispatch({type : "ANSWER" , payload: option === current.answer})
    reset();
  }


  return (
    <div className="container mt-4">
       <Timer time={time}/>
       <Progressbar current={index} total={Question .length}/>
       <QuestionCard 
        question={current.question}
        options={current.options}
        onSelect={handleSelect}
       />
       
       
    </div>
  )
}

export default Quiz
