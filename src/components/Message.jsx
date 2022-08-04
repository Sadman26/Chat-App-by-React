import './Message.css'
import React from 'react'
import { db } from "../config/firebase"
import { doc, deleteDoc } from "firebase/firestore";

function Message(props) {
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "messages", props.id));

    } catch(error) {
      console.log("delete hoi nai", error)
    }
  }

  return (
    <div className='msg'>
          <i className="fa-solid fa-trash-can" onClick={handleDelete}></i>
        <h3>
           {props.msg}
        </h3>
        <h4>
           {props.time?.toDate().toLocaleTimeString()}
        </h4>
    </div>
  )
}

export default Message