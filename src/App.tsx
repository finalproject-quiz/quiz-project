import { useState, useEffect } from 'react'
import silhouette from './silhouette.png'
import Login from './components/Login';
import './App.css';

function App() {

  const [user, setUser] = useState(null);

  const [data, setData] = useState(null);

  async function login(user: string) {
    await fetch("http://localhost:5110/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name: user, score: 0 })
    })
    setUser(user);
  }

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:5110/quizzes")
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
      <Login login={login} />
    </>
  )
}

export default App
