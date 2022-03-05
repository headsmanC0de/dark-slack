import React from 'react';
import styled from 'styled-components'
import CreateIcon from '@mui/icons-material/Create';
import SideBarOption from './SideBarOption';
import CommentIcon from '@mui/icons-material/Comment';
import ForumIcon from '@mui/icons-material/Forum';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PeopleIcon from '@mui/icons-material/People';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import { collection } from "firebase/firestore"; 


export default function SideBar() {
	const [channels, loanding, error] = useCollection(collection(db, 'rooms'))

	return (
		<SidebarContainer>
			<SidebarHeader>
					<h3>MyBotgarage</h3>
					<CreateIcon />
			</SidebarHeader>

			<SideBarOption Icon={CommentIcon} title={'Threads'} />
			<SideBarOption Icon={ForumIcon} title={'All DMs'} />
			<SideBarOption Icon={PeopleIcon} title={'Peolpe & User Groupes'} />
			<SideBarOption Icon={AlternateEmailIcon} title={'Mentions & reactions'} />
			<SideBarOption Icon={BookmarkBorderOutlinedIcon} title={'Saved items'} />
			<SideBarOption Icon={MoreVertIcon} title={'More'} />
			<SideBarOption Icon={ArrowDropUpIcon} title={'Show less'} />
			<hr/>
			<SideBarOption Icon={AddIcon} addChannelOption title={'Add Channel'} />
			<SideBarOption Icon={ArrowDropDownIcon} title={'Channels'} />

			{channels?.docs.map(doc => (
				<SideBarOption key={doc.id} id={doc.id} title={doc.data().name} />
			))}
		</SidebarContainer>
	)
}

const SidebarContainer = styled.div`
	background-color: var(--bg-sidebar);
	color: white;
	flex: 0.2;
	border-top: 1px solid var(--border-gray);
	margin-top: 38px;


	> hr {
		margin: 10px 0;
		border: 0.5px solid var(--border-gray);
	}
`;
const SidebarHeader = styled.div`
	display: flex;
	border-bottom: 1px solid var(--border-gray);
	height: 50px;
	padding: 0 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: var(--light-grey);
	cursor: pointer;
	margin-bottom: 10px;

	:hover {
		background-color: var(--gray-hover);
	}

	> h3 {
		font-size: 1.4rem;
		margin-right: 10px;
	}

	> .MuiSvgIcon-root {
		padding: 8px;
		color: #49274b;
		font-size: 18px;
		background-color: var(--light-grey);
		border-radius: 50%;
	}
`;