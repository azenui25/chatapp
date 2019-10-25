import React from 'react';
import './App.css';
import Chatroom from './components/Chatroom'
import ChatroomForm from './components/ChatRoomForm'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
  return (
    <div>

    
  <h1>Asanga's ChatApp</h1>
  <Chatroom/>
  <ChatroomForm/>
  <Signup/>
  <Login/>

  </div>
  );
}

export default App;
