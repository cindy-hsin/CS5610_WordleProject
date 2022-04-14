import './Box.css';

export default function Box(props) {
    return (
        // <div className="letter-box" style={{backgroundColor: props.color}}>{props.letter}, {props.color}</div>
        <div className="letter-box" style={{backgroundColor: props.color}}>{props.letter}</div>
    )

}