import React from 'react';
import styled from 'styled-components'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';

export default function SideBar() {
  return (
	<SidebarContainer>
		<SidebarHeader>
				<h3>MyBotgarage</h3>
				<CreateIcon />
		</SidebarHeader>
	</SidebarContainer>
  )
}

const SidebarContainer = styled.div`
	background-color: var(--bg-sidebar);
	color: white;
	flex: 0.2;
	border-top: 1px solid var(--border-gray);
	margin-top: 38px;
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

	:hover {
		background-color: var(--gray-hover);
	}

	> .MuiSvgIcon-root {
		padding: 8px;
		color: #49274b;
		font-size: 18px;
		background-color: var(--light-grey);
		border-radius: 50%;
		cursor: pointer;
	}
`;