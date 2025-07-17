import React, { useEffect, useState } from 'react';
import './ChatButton.css';

const ChatButton = () => {
  const [chatReady, setChatReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.tidioChatApi) {
        window.tidioChatApi.hide(); // hide default widget
        setChatReady(true);         // chat is ready to use
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const openChat = () => {
    if (chatReady && window.tidioChatApi) {
      window.tidioChatApi.show();  // make sure it's visible
      window.tidioChatApi.open();  // then open it
    }
  };

  return (
    <button className="chat-button" onClick={openChat}>
      💬
    </button>
  );
};

export default ChatButton;
