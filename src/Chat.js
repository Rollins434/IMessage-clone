/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { IconButton } from '@material-ui/core';
import {  MicNone } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import './Chat.css'
import { selectChatId, selectChatName } from './features/chatSlice';
import {selectUser} from './features/userSlice';
import db from './firebase';
import Message from './Message';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
 function Chat() {
     // eslint-disable-next-line no-undef
     const user = useSelector(selectUser);
     const[input, setInput] = useState("");
     const chatName = useSelector(selectChatName);
     const chatId = useSelector(selectChatId);
     const [messages, setMessages] = useState([]);

        // eslint-disable-next-line react-hooks/exhaustive-deps
        useEffect(() =>{
            if(chatId) {
                
                db.collection('chats').doc(chatId).collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot(snapshot =>{
                    setMessages(snapshot.docs.map((doc) =>({
                        id: doc.id,
                        data: doc.data(),
                    })))
                } );
            }
        },[chatId]);


    const sendMessage = (e)=>{
        e.preventDefault();
        
        
        db.collection('chats').doc(chatId).collection('messages')
        .add({
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            message : input,
            uid : user.uid,
            displayName : user.displayName,
            photo : user.photo,
            email : user.email,
        })
        setInput(""); 
        //firebase code
    };

    return (
        <div className="chat">
            
            <div className="chat__header">
    <h4>To <span className="chat__name">{chatName}</span></h4>
                <strong>Details</strong>
            </div>

            {/* chat messages */}

            <div className="chat__message">
  <FlipMove>
    {messages.map(({id, data}) => (
        <Message key={id} contents ={data} />
    ))}
    </FlipMove>
            </div>

            {/* chatinput */}
            <div className="chat__input">
           <form>
           <input value= {input} onChange ={e=>setInput(e.target.value)} type="text" placeholder="write here"/>
            <button onClick ={sendMessage}>Send</button>
           </form>

            <IconButton>
            <MicNone className="chat__mic"/>
            </IconButton>
           
            </div>

        </div>
    )
}
export default Chat;