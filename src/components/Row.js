import Box from './Box';
import './Row.css';


export default function Row(props) {
  const {inputValidWord, colors} = props.guess;

  
  console.log(`Row id: ${props.rowId}, inputValidWord: ${inputValidWord}, colors: ${colors}`);
  return(
    <div className='word-row'> 
      {Array.from({length: props.wordLength}, 
        (ele, idx) => <Box id={idx} 
          letter={inputValidWord[idx]} 
          color= {colors[idx]}
          key={idx}/>)
      }
     
      {/* Same as:
        (props.guess).map((char) => <Box letter={char}/>)
        */
      }
    </div>
  )
  
}