import React, {useState} from 'react';
import './App.css';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <div className='container'>
        <h3>Questions</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
  );
}

export default App;
