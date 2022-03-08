import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase';

export default function ChatInput({ channelName, channelId}) {
	const [input, setInput] = useState('')

	const sendMessage = (event) => {
		event.preventDefault()

		if(!channelId){
			return false
		}
		
		addDoc(collection(db, "rooms").doc(channelId).collection(db, "messages"), {
			message: input,
			user: 'headsman',
			createdAt: new Date().ISOstring,
		});

		setInput('')
	}

  return (
	  <ChatInputContainer>
		<form>
			  <input value={input} onChange={e => setInput(e.target.value)} placeholder={`Message #Room`} />
			  <Button hidden type='submit' onClick={sendMessage}>Send</Button>
		</form>
	  </ChatInputContainer>
  )
}

const ChatInputContainer = styled.div`
	border-radius: 20px;

	> form {
		position: relative;
		display: flex;
		justify-content: center;
	}

	> form > input {
		position: fixed;
		bottom: 30px;
		width: 60%;
		border: 1px solid var(--border-gray);
		border-radius: 8px;
		padding: 15px;
		outline: none;
		margin: 0 15px;
		background-color: #222529;
		color: var(--light-grey);
	}

	> form > button {
		display: none !important;
	}
`