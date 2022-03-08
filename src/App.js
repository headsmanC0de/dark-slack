import React from "react";
import Header from './components/Header';
import SideBar from './components/SideBar';
import Chat from './components/Chat';
import styled from 'styled-components'
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header/>
      <AppBody>
        <SideBar/>
          <Chat/>
      </AppBody>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
  padding-top: 38px;
`