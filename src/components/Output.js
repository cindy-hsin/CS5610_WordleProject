import Row from './Row';



export default function Output(props) {
  const rowNumber = props.rowNumber;
  const wordLength = props.wordLength;
  
  
  return(
    <div>
      <div>rowNumber: {rowNumber}</div>
      <div>wordLength: {wordLength}</div>
      {Array.from({length: rowNumber}, () => <Row wordLength={wordLength}/>)}
    </div>
  )

  


}