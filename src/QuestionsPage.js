import React from "react";
import Question from './Question'
// import nanoid from 'nano-id'

export default function QuestionsPage(props) {

    const [questions, setQuestions] = React.useState(props.questions)
    // setQuestions(props.questions)
    const [answers, setAnswer] = React.useState(Array(5).fill(null))

    const localAllSelected = JSON.parse(localStorage.getItem("allSelected"))
    console.log("localAllSelected = " + localAllSelected)
    const [allSelected, setAllSelected] = React.useState(localAllSelected)
    // const [state, setState] = React.useState(props.state)
    const [score, setScore] = React.useState(0)
    /* const newState = localStorage.getItem("state") */

    /* React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy")
            .then(res => res.json())
            .then(data => setQuestions(data.results))
    }, []
    ) */

    function getShuffledArr(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array
    }

    function setUserAns(id, ans) {
        setAnswer(data =>
            [...data.slice(0, id), ans, ...data.slice(id + 1)]
        )

        // console.log(ans + " Hi")
        // console.log(id)
    }

    // console.log(answers)

    /* function addScore() {
        setScore(prevScore => prevScore + 1)
        console.log(score)
    }
    console.log(score) */

    // console.log(questions)

    /* const questionsData = questions */

    const questionElements = questions.map(data => {
        let arr = data.incorrect_answers
        arr.unshift(data.correct_answer)
        const shuffledArr = getShuffledArr(arr.filter((x, i, a) => a.indexOf(x) === i))
        const id = questions.indexOf(data)
        return (
            <Question
                id={id}
                question={data.question}
                option={shuffledArr}
                answer={data.correct_answer}
                userAns={setUserAns}
                selected={allSelected}
                getAns={answers[id]}
            />
        )
    })

    function checkAnswers() {
        if (answers.length === questions.length) {

            setAllSelected(true)
            
            for (let i = 0; i < questions.length; i++) {
                if (answers[i] === questions[i].correct_answer) {
                    setScore(prevScore => prevScore + 1)
                }
            }
            // alert(`You have answered ${score} question correctly`)
            // console.log("Success")
        }
        else {
            alert("Please answer all the questions!")
        }
        
    }
    localStorage.setItem("allSelected", allSelected)

    return (
        <div>
            <div className="questions-page">
                {questionElements}
            </div>
            {!allSelected ?
                <div className="result">
                    {questions.length > 0 && <button className="check-ans-btn" onClick={checkAnswers}>Check answers</button>}
                </div> :
                <div className="result">
                    <h3>You scored {score}/{questions.length} correct answers</h3>
                    <button className="check-ans-btn" onClick={props.changeState}>Play again</button>
                </div>
            }
        </div>
    )
}