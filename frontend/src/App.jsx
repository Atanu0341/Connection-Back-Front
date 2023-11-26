import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>Chai aur Full Stack | youtube</h1>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  );
}

export default App;
