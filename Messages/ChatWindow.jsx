import React, { useState } from "react";
import "./Messages.css";

const ChatWindow = ({ selectedConversation }) => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState(selectedConversation.messages);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const updatedMessages = [
        ...messages,
        { sender: "You", text: newMessage },
      ];
      setMessages(updatedMessages);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-window">
      <h3>{selectedConversation.name}</h3>
      <div className="messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.sender === "You" ? "message-outgoing" : "message-incoming"
            }`}
          >
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
