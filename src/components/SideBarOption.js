import React from 'react'
import styled from 'styled-components'
import { db } from '../firebase'
import { collection, addDoc } from "firebase/firestore"; 
import { useDispatch } from 'react-redux';
import { enterRoom } from '../features/appSlice';

export default function SideBarOption({ Icon, title, addChannelOption, id }) {
	const dispatch = useDispatch()
	
	const addChannel = async () => {
		const channelName = prompt('Please enter the channel name')

		if (channelName){
			try {
				const docRef = await addDoc(collection(db, "rooms"), {
					name: channelName,
				});
				console.log("Document written with ID: ", docRef.id);
			} catch (e) {
				console.error("Error adding document: ", e);
			}

		}
	}

	const selectChannel = () => {
		if(id) {
			dispatch(enterRoom({
				roomId: id
			}))
		}
	}

	return  (
		<SideBarOptionContainer
			onClick={addChannelOption ? addChannel : selectChannel}
		>
			{Icon && <Icon fontSize='small' style={{ padding: 10 }} />}
			{Icon ? (<h3>{title}</h3>) : (<SidebarOptionChannel><span>#</span>{title}</SidebarOptionChannel>)}
		</SideBarOptionContainer>
	)
}

const SideBarOptionContainer = styled.div`
	height: 25px;
	display: flex;
	align-items: center;
	cursor: pointer;
	border-top: 1px solid var(--bg-sidebar);
	border-bottom: 1px solid var(--bg-sidebar);
	opacity: 0.6;
	
	> h3 {
		font-weight: 500;
	}

	:hover {
		opacity: 1;
		background-color: var(--gray-hover);
		border-top: 1px solid var(--border-gray);
		border-bottom: 1px solid var(--border-gray);
	}
`
const SidebarOptionChannel = styled.h3`
	font-weight: 300;
	padding: 10px 0;

	> span {
		padding: 0 15px;
	}
` 