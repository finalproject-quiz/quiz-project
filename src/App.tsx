import { useState, useEffect } from 'react';
import silhouette from './silhouette.png';
import './App.css';
import Question from './Question';
import Login from './components/Login';


type TQuestions = {
  answer1?: string,
  answer2?: string,
  answer3?: string,
  answer4?: string,
  text?: string,
  id?: number
}

const apiURL = "http://localhost:5110";

function App() {

  const [user, setUser] = useState(null);

  const [questions, setQuestions] = useState<null | TQuestions[]>(null);

  async function login(user: string) {
    await fetch(`${apiURL}/users`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name: user, score: 0 })
    })
    setUser(user as any);
  }

  async function getData() {
    const res = await fetch(`${apiURL}/questions`);
    const questions: TQuestions[] = await res.json();
    setQuestions(questions);
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <div className="background" id="title">
        <h1>The Renewable Energy Investments Quiz</h1>
        <img src={silhouette} id="wind-farm-silhouette" alt="a black silhouette of some drawings of wind turbines in front of a white background" />
      </div>
      {user ? (
        <>
          <Question questions={questions} />

        </>
      ) : (
        <Login login={login} />
      )}
    </>
  )
}

export default App
