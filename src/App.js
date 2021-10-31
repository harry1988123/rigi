import React from "react";
import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./app/components/ChatFeed";
import LoginForm from "./app/components/LoginForm";

function App() {

  if(!localStorage.getItem('username')) return <LoginForm/>

  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="01a8c37e-47e3-4efd-bda2-481dd8fe2dac"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
}

export default App;
