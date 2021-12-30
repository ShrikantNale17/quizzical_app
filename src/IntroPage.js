export default function IntroPage(props) {
    return (
        <div className="intro-page">

            <h1>Quizzical</h1>
            <p>Some description if needed</p>
            <button className="start-btn" onClick={props.start}>Start quiz</button>

        </div>
    )
}
