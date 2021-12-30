import React from "react"
import Option from "./Option"

export default function Question(props) {

    const [options, setOptions] = React.useState(ThisOptions())
  
    function ThisOptions() {
        const newOptions = props.option.map(option => ({
            value: option,
            isSelected: false
        }))
        return newOptions
    }

    function setOption(value) {
        props.userAns(props.id,value)
        // console.log(answer)
        setOptions(prevOpt => prevOpt.map(opt => {
            return opt.value === value ? {...opt, isSelected: !opt.isSelected} : {...opt, isSelected: false}
        }))
    }

    

    const optionElements = options.map(option => <Option 
                                            value={option.value}
                                            isSelected={option.isSelected}
                                            selectOpt={() => setOption(option.value)}
                                            allSelected={props.selected}
                                            getAns={props.getAns}
                                            correctAns={props.answer}
                                        />)

    return (
        <div className="question">
            <p>{props.question}</p>
            <div className="options">
                {optionElements}
            </div>
            <hr />
        </div>
    )
}