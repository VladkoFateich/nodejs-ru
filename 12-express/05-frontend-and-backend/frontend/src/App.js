import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [person, setPerson] = useState(); //person содержит данные с сервера personData
  useEffect(() => {
    fetch('http://127.0.0.1:5000')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPerson(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      {person && (
        <>
          <h1>{person.personData.name}</h1>
          <h2>{person.personData.surname}</h2>
          <h3>{person.personData.isInstructor ? 'Instructor' : 'Student'}</h3>
        </>
      )}
    </div>
  );
}

export default App;
