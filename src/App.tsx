import { useState } from 'react'
import silhouette from './silhouette.png'
import './App.css'
import Question from './Question'
//import apiURL from ????!

function App() {
 
  const [activeQuestion, setActiveQuestion] = useState(null);

  async function fetchQuestions() {
    try {
      const response = await fetch (`${apiURL}/question`);
      if (!response.ok) {
        throw new Error(`Fetch failed with status ${response.status}`); 
      }
      const questionData = await response.json(); 
    } catch (error) {
      console.error(error);
    }

  }


  return (
    <>
      <div id="title">
        <h1>The Renewable Energy Investments Quiz</h1>
        <img src={silhouette} id="wind-farm-silhouette" alt="a black silhouette of some drawings of wind turbines in front of a white background" />
      </div>
      <div id="active-question">
        {activeQuestion && <Question  />}
        
      </div>
}
      
    </>
  )
}

export default App
