export default function Option(props) {

    const styles = {
        backgroundColor: props.allSelected ? 
            props.correctAns === props.value ? "#94D7A2" : props.getAns === props.value ? "#F8BCBC" : "transparent" :
            props.isSelected ? "#D6DBF5" : "transparent" ,
        border: props.allSelected ? props.correctAns === props.value ? "none" : props.getAns === props.value ? "none" : "" : props.isSelected ? "none" : "" ,
        opacity: props.allSelected ? props.correctAns === props.value ? "" : "45%" : ""
    }


    return (
        <input type="button" value={props.value} onClick={props.selectOpt} style={styles} disabled={props.allSelected && "disabled"}/>
    )
}