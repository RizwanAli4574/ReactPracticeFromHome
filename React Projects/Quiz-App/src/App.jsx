import { BrowserRouter , Routes , Route } from "react-router-dom"
import { Suspense , lazy } from "react"
import Home from "./Pages/Home"
import Quiz from "./Pages/Quiz"
import LeaderBoard from "./Pages/LeaderBoard"
const Result = lazy( () => import("./Pages/Result"))


function App() {


  return (
    <>
     <BrowserRouter>
      <Suspense fallback={<h2 className="text-center mt-5">Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/quiz" element={<Quiz/>}/>
          <Route path="/result" element={<Result/>}/>
          <Route path="/leaderboard" element={<LeaderBoard/>}/>
        </Routes>
      </Suspense>
     </BrowserRouter>
    </>
  )
}

export default App
