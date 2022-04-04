import Row from './Row';



export default function Output(props) {
  const rowNumber = props.currentDifficultySetting.attemptNumber;
  const wordLength = props.currentDifficultySetting.wordLength;
  
  return(
    <div>
      <div>rowNumber: {rowNumber}</div>
      <div>wordLength: {wordLength}</div>
      {Array.from({length: rowNumber}, () => <Row wordLength={wordLength}/>)}
    </div>
  )

  


}