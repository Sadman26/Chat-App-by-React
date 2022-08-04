import './Input.css'
import {db} from "../config/firebase"
import React, { useState } from 'react'
import { collection, addDoc, serverTimestamp  } from "firebase/firestore";
function Input() {
  const[msg, setmsg] = useState("");
  let ok = async (ev) => {
    if(!msg) {
      alert("Enter msg");
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        msg,
        time:serverTimestamp()
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    } finally {
      setmsg("")
    }
  }
  return (
    <>
      <div className='Form'>
        <h1>Welcome</h1>
          <textarea name="" id="" cols="35" rows="5" onChange={(e)=> setmsg(e.target.value)} value={msg}></textarea>
          <br />
          <button onClick={ok}>SAVE</button>
      </div>
    </>
    
  )
}
export default Input;