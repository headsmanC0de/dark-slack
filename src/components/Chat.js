import React from 'react';
import styled from 'styled-components'
import InfoIcon from '@mui/icons-material/Info';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import ChatInput from './ChatInput';

export default function Chat() {
	const roomId = useSelector(selectRoomId)

  return (
		<ChatContainer>
			<>
			  <Header>
				  <HeaderLeft>
					  <h4>
						  <strong># Room-Name</strong>
					  </h4>
				  </HeaderLeft>
				  <HeaderRight>
					  <InfoIcon />
					  <p>Details</p>
				  </HeaderRight>
			  </Header>

			  <ChatMessages>
				  {/* List of the messages */}
			  </ChatMessages>

			  <ChatInput
			  	channelName={'Some name'}
			  	channelId={roomId}
			  />
			</>
		</ChatContainer>
  )
}

const ChatContainer = styled.div`
	color: var(--light-grey);
	background-color: var(--chat-bg);
	flex: 0.7;
	flex-grow: 1;
	border: 1px solid var(--border-gray);
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	border-bottom: 1px solid var(--border-gray);
	height: 20px;
`;
const HeaderLeft = styled.div``;
const HeaderRight = styled.div`
	display: flex;
	> p {
		margin-left: 5px;
	}
	`;
const ChatMessages = styled.div``;