import  { useState } from 'react'

function ChipsInput() {


  // CHIPS[] = [{id,lable}]
  const[chips,setChips] = useState([]);
  const[inputText,setInputText] = useState("");
  const[idCounter,setIdCounter] = useState(0);
  

  const onInputChange = (event)=>{
     setInputText(event.target.value);
  }

  const onKeyPressed=(event)=>{
        if(event.key === "Enter" && inputText.trim() !== ""){
          const newChip ={
            id: idCounter,
            lable : inputText.trim()
          }
          setChips([...chips,newChip]);
          setIdCounter(idCounter+1);
          setInputText("");
         }
         
  }
  const onDeleteChip = (chipId)=>{
    setChips(chips.filter((chip) => chip.id !== chipId));
  }


  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:'center'}}>
      <h1>Chips Input</h1>
      <input 
      type="text" 
      value={inputText}
      onChange={onInputChange}
      onKeyDown={onKeyPressed}
      placeholder='Type a chip and press enter'
      style={{padding:"8ppx", width:"200px"}}
      />

      <div style={{margin:"20px",display:"flex",flexWrap:"wrap",alignItems:"center",}}>
        {
          chips?.map((chip)=>{
            return(
            <div 
             key={chip.id}
             style={{
              display:"flex",
              alignItems:"center",
              margin:'5px',
              backgroundColor:"lightgray",
              borderRadius:"20px",
              padding:'5px 10px'
             }}
             >
              <span>
                   {chip.lable}
              </span>
              <button
              onClick={()=>onDeleteChip(chip.id)}
              style={{
                padding:"5px",
                color:"red",
                marginLeft:"5px",
                border:"none",
                background:"transparent",
                cursor:'pointer'
              }}

              >
                X
              </button>
             </div>
              )
          })
        }
      </div>
    </div>
  )
}

export default ChipsInput