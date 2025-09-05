import { useState } from "react"
import PopupMessage from "./PopupMessage";


const ClipboardCopy = () => {
  const [inputValue, setInputValue] = useState('');
  const [copied, setCopied] = useState(false);
  
  const handleClick = ()=>{
    if(inputValue === '') return alert('input is empty')
    navigator.clipboard.writeText(inputValue).then(()=>{
        setCopied(true)
        setTimeout(()=>{ setCopied(false) }, 2000)
    })
  }


    return (
    <div style={{ margin : '40px' }}>
        <input style={{ padding:'10px', margin : '0px 10px 0px 0px' }}  type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="text here to copy" />
        <button style={{ padding : '10px' }} onClick={handleClick} >Copied</button>
        <PopupMessage copied={copied} />
    </div>
  )
}

export default ClipboardCopy