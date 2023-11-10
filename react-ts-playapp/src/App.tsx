import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header.tsx";
import PlayGoalList from "./components/PlayGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

 export type PlayGoal = {
    title: string;
    description: string;
    id: number;
}
function App() {
    const [goals, setGoals] = useState<PlayGoal[]>([])    
    const [count, setCount] = useState(0)

    function submitoalHandler(goal: string, summary: string){
        setGoals(prevGoals => {
            const newGoal: PlayGoal = {
                id: Math.random(),
                title: goal,
                description: summary,
            };
            return [...prevGoals, newGoal]
        } );
    }
    function addGoalHandler(){
      setGoals(prevGoals => {
          const newGoal: PlayGoal = {
              id: Math.random(),
              title: 'Learn React + TS',
              description: 'Learn it in depth!'
          };
          return [...prevGoals, newGoal]
      } );
  } 
  
  function deleteGoalHandler(id: number){
      setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id));
  }
  
  return (
    <>
      <div>
          <Header image={{src: reactLogo, alt: "A list of goals"}}>
              <h1> Our App Goals </h1>
          </Header>
          <button onClick={addGoalHandler}>Add Goal</button>
          <PlayGoalList goals={goals} onDeleteGoal={deleteGoalHandler}></PlayGoalList>
          <NewGoal onAddGoal={submitoalHandler}></NewGoal>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
