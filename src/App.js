import React from 'react'
import IntroPage from './IntroPage';
import QuestionsPage from './QuestionsPage';
import './App.css';

function App() {
  const localState = JSON.parse(localStorage.getItem("state"))
  // console.log("localState = " + localState)

  const [questions, setQuestions] = React.useState([])
  // localStorage.setItem("questions", JSON.stringify(questions))
 /*  React.useEffect(() => 

  )
 */

  const [start, setStart] = React.useState(localState)

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy")
        .then(res => res.json())
        .then(data => setQuestions(data.results))
  }, [])

  // console.log(start)

  function setState() {
    console.log("start " + start)
    localStorage.setItem("allSelected", false)
    if(start === null || start === false)
      localStorage.setItem("questions",JSON.stringify(questions))
      // console.log(JSON.parse(localStorage.getItem("questions")))

    setStart(prevState => prevState === null || prevState === false ? true : false)

    /* const newState = JSON.parse(localStorage.getItem("state"))
    localStorage.setItem("state", newState)
    setStart(prevState => !prevState) */
  }


  localStorage.setItem("state", start)
  console.log(start)
  
  return (
    <div className="App">
      {!start && <IntroPage start={setState} />}
      {start && <QuestionsPage 
        state={start}
        changeState={setState}
        questions={JSON.parse(localStorage.getItem("questions"))}
      />}
      
    </div>
  );
}

export default App;
