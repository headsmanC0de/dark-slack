import React from "react";
import Header from './components/Header';
import styled from 'styled-components'
import { Link } from "react-router-dom";
import SideBar from './components/SideBar';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header/>

      <AppBody>
        <SideBar/>
        <Link to="/chat">chat</Link>
      </AppBody>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`