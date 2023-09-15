import { useState, useEffect } from 'react';
import silhouette from './silhouette.png';
import './App.css';
import Question from './Question';
import Login from './components/Login';

function App() {
 
  const [user, setUser] = useState(null);

  const [data, setData] = useState(null);
  
  const [activeQuestion, setActiveQuestion] = useState(null);
  
  const apiURL = "http://localhost:5110";

  async function fetchQuestions() {
    try {
      const response = await fetch (`${apiURL}/question`);
      if (!response.ok) {
        throw new Error(`Fetch failed with status ${response.status}`); 
      }
      const questionData = await response.json(); 
    } catch (error) {
      console.error(error);
    };

  async function login(user: string) {
    await fetch(`${apiURL}/users`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name: user, score: 0 })
    })
    setUser(user);
  };

  useEffect(() => {
    async function getData() {
      const res = await fetch(`${apiURL}/quizzes`)
      setData(await res.json());
    }
    getData();
  }, []);

  return (
    <>
      <div id="title">
        <h1>The Renewable Energy Investments Quiz</h1>
        <img src={silhouette} id="wind-farm-silhouette" alt="a black silhouette of some drawings of wind turbines in front of a white background" />
      </div>
      <div id="active-question">
        {activeQuestion && <Question  />}
        
      </div>
      
      <Login login={login} />
    </>
  )
};

export default App
