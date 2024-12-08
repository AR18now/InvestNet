import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import MessageList from "../components/Messages/MessageList";
import ChatWindow from "../components/Messages/ChatWindow";
import "./MessagesPage.css";

const dummyConversations = [
  {
    name: "John Doe",
    avatar: "/assets/images/avatar1.jpg",
    lastMessage: "Looking forward to the meeting!",
    messages: [
      { sender: "John Doe", text: "Hello!" },
      { sender: "You", text: "Hi, how are you?" },
      { sender: "John Doe", text: "Looking forward to the meeting!" },
    ],
  },
  {
    name: "Jane Smith",
    avatar: "/assets/images/avatar2.jpg",
    lastMessage: "Can you share the document?",
    messages: [
      { sender: "Jane Smith", text: "Hey, are you free now?" },
      { sender: "You", text: "Yes, I am." },
      { sender: "Jane Smith", text: "Can you share the document?" },
    ],
  },
];

const MessagesPage = () => {
  const [selectedConversation, setSelectedConversation] = useState(0);

  return (
    <div className="messages-page">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="messages-container">
          <MessageList
            conversations={dummyConversations}
            onSelectConversation={setSelectedConversation}
          />
          <ChatWindow
            selectedConversation={dummyConversations[selectedConversation]}
          />
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
