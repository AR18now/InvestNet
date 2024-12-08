import React from "react";
import "./Messages.css";

const MessageList = ({ conversations, onSelectConversation }) => {
  return (
    <div className="message-list">
      <h3>Messages</h3>
      <ul>
        {conversations.map((conversation, index) => (
          <li key={index} onClick={() => onSelectConversation(index)}>
            <img
              src={conversation.avatar}
              alt={conversation.name}
              className="avatar"
            />
            <div className="conversation-details">
              <h4>{conversation.name}</h4>
              <p>{conversation.lastMessage}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
