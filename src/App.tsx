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

  async function login(user: string) {
    await fetch(`${apiURL}/users`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name: user, score: 0 })
    })
    setUser(user);
  }

  useEffect(() => {
    async function getData() {
      const res = await fetch(`${apiURL}/quizzes`)
      setData(await res.json());
    }
    getData();
  }, []);
 
  function nextQuestion() {
    const nextQuestionId = activeQuestion.id + 1;
    const nextQuestion = questions.find(
      (question) => question.id === nextQuestionId
    );

    if (nextQuestion) {
      setActiveQuestion(nextQuestion);
    }
  }
 
  return (
    <>
      <div id="title">
        <h1>The Renewable Energy Investments Quiz</h1>
        <img src={silhouette} id="wind-farm-silhouette" alt="a black silhouette of some drawings of wind turbines in front of a white background" />
      </div>
      {activeQuestion ? (
      
         <Question {...activeQuestion} nextQuestion={nextQuestion}/>
      ) : (
        <Login login={login} />
      )}
    </>
  )
}

export default App
