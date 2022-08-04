import './App.css'
import React from "react"
import {db} from "./config/firebase"
import Input from './components/Input'
import Message from './components/Message'
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
const q = query(collection(db, "messages"),  orderBy("time", "desc"));
function App() {
  const [err, setErr] = React.useState(undefined);
  const [messages, setMessages] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    const unsubscribe = onSnapshot(q,
    (querySnapshot) => {
      const fetchedMessages = [];

      querySnapshot.forEach((doc) => {
        fetchedMessages.push({
          id: doc.id,
          ...(doc.data())
        })
      });
      setMessages(fetchedMessages)
      setLoading(false);
    }, 
    (error) => {
      setErr(error)
    });

    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <div className="App">
      {JSON.stringify(err)}
      <Input/>
      {loading ?<h1>Loading...</h1> : messages.map(message => <Message key={message.id} id={message.id} msg={message.msg} time={message.time}/>)}
    </div>
  );
}

export default App;