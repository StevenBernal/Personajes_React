import React, {  useEffect, useRef, useState } from "react";
import { AppState, Subs } from "./Backend/interfaces/subs.interfaces";
import "./App.css";
import "./CSS/Form.css";
import "./CSS/List.css"
import List from "./components/List";
import Form from "./components/Form";
import { Personajes } from "./Backend/state/initial.state";

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubs, setNewSubs] = useState<AppState["newSubs"]>(0);

  const divRef= useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(Personajes)
  }, [])

  const handleNewSubs =(newSub: Subs): void =>{
    setSubs(subs => [...subs, newSub])
    setNewSubs(n => n + 1)
  }
  return (
    <>
      <div className="App" ref={divRef}>
      
      <div className="List" >
      <h1>Personajes</h1>
      newSubs: {newSubs}
        <List subs={subs} />
        
      </div>
    
      <div className="form">
      <Form onNewSub={handleNewSubs} />
      </div>
      
      </div>
      

    </>
  );
}

export default App;
