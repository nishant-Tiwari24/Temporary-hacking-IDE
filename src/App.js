import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {

    const[sourcecode,setsourcecode] = useState("");
    const[content,setcontent] = useState("")
    const[textcharacter,setTextcharacter] = useState(0);

    useEffect(()=>{
      containerRef.current.focus();

      fetch('code.txt')
      .then((res)=>res.text())
      .then((text)=>setsourcecode(text));
    },[])

    const runscript = () => {
      setTextcharacter(textcharacter + 3);
      setcontent(sourcecode.substring(0,textcharacter))
    }
    
    const removemessage = () => {
      
    }
    

    const containerRef = useRef(null);

    const handlekeychanges = (e) => {
      if(e.key != 'Escape') {
        runscript()
      }
      else {
        removemessage()
      }
    }
    

  return (
    <div id='container' onKeyDown={handlekeychanges} tabIndex={0} ref={containerRef}>
      <div id='source' >
        {content}
      </div>

    </div>
  );
}

export default App;
