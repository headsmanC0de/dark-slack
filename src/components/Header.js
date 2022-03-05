import React from 'react'
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
	return <HeaderContainer>
				<HeaderLeft>
					<AccessTimeIcon sx={{ color: 'white' }} />
				</HeaderLeft>

				<HeaderSearch>
					<input placeholder='Search' />
					<SearchIcon sx={{ color: 'white' }} />
				</HeaderSearch>

				<HeaderRight>
					<HeaderQuestion sx={{ color: 'white' }} />
					<HeaderAvatar sx={{ width: 28, height: 28, }} variant="rounded" />
				</HeaderRight>
			</HeaderContainer>
}

export default Header

const HeaderContainer = styled.div`
	background-color: var(--slack-black) ;
	display: flex;
	position: fixed;
	width: 100%;
	padding: 5px 0;
    align-items: center;
    justify-content: center;
`
const HeaderLeft = styled.div`
	display: flex;
    align-items: center;
	padding: 0 20px;
    flex: 0.5;
    justify-content: flex-end;
`
const HeaderSearch = styled.div`
	display: flex;
	flex: 0.8;
	opacity: 1;
	border-radius: 6px;
	background-color: var(--bg-search);
	padding: 0 5px;
	border: 1px gray solid;

	> input {
		background-color: transparent;
		border: none;
		width: 100%;
		text-align: left;
		min-width: 30vw;
		outline: none;
		color: white;
	}
`
const HeaderRight = styled.div`
	flex: 0.5;
    display: flex;
    align-items: center;
    justify-content: flex-end;
	padding: 0 16px
`
const HeaderQuestion = styled(HelpOutlineIcon)`
	cursor: pointer;
	margin-right: 8px;
	opacity: 0.8;
`
const HeaderAvatar = styled(Avatar)`
	cursor: pointer;

	:hover {
		opacity: 0.8;
	}
`