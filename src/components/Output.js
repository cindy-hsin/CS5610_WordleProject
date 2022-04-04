import Row from './Row';



export default function Output(props) {
  const rowNumber = props.currentDifficultySettings.attemptNumber;
  const wordLength = props.currentDifficultySettings.wordLength;
  
  return(
    <div>
      {Array.from({length: rowNumber}, () => <Row wordLength={wordLength}/>)}
    </div>
  )

  


}