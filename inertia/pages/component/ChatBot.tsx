import React, { useCallback, useState } from "react";

// Message interface
interface Message {
  text: string;
  sender: "user" | "bot";
}

// ChatMessages Component Props
interface ChatMessagesProps {
  messages: Message[];
}

// ChatHeader Component Props
interface ChatHeaderProps {
  onClose: () => void;
}

// ChatInput Component Props
interface ChatInputProps {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  handleSendMessage: () => void;
}

// ChatHeader Component
const ChatHeader: React.FC<ChatHeaderProps> = ({ onClose }) => (
  <div className="panel-heading d-flex justify-content-between align-items-center bg-primary text-white rounded-top p-3">
    <p className="h5 m-0">ChatBot's Go Entreprenuers</p>
    <button
      onClick={onClose}
      aria-label="Close chat"
      className="btn btn-link text-white"
    >
      <i className="bi bi-x-lg"></i>
    </button>
  </div>
);

// ChatMessages Component
const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => (
  <div className="panel-body p-3" style={{ height: '320px', overflowY: 'auto' }}>
    {messages.map((message, index) => (
      <div key={index} className={`mb-2 ${message.sender === "user" ? "text-end" : ""}`}>
        <p
          className={`p-2 rounded ${message.sender === "user" ? "bg-primary text-white" : "bg-light text-dark"}`}
          style={{ display: 'inline-block' }}
        >
          {message.text}
        </p>
      </div>
    ))}
  </div>
);

// ChatInput Component
const ChatInput: React.FC<ChatInputProps> = ({ userInput, setUserInput, handleSendMessage }) => {
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="panel-footer p-3 d-flex">
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyUp={handleKeyUp}
        placeholder="Type a message"
        className="form-control me-2"
      />
      <button
        onClick={handleSendMessage}
        className="btn btn-primary"
      >
        Send
      </button>
    </div>
  );
};

// Main Chatbot Component
const Chatbot: React.FC = () => {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");

  // Toggle chatbox visibility
  const toggleChatbox = useCallback(() => {
    setIsChatboxOpen((prevState) => !prevState);
  }, []);

  // Add user message to the chat
  const addUserMessage = useCallback(
    (message: string) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: "user" },
      ]);
    },
    []
  );

  // Add bot message to the chat
  const addBotMessage = useCallback(
    async (userMessage: string) => {
      try {
        const response = await fetch('/chatbot', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: userMessage }),
        });

        const data = await response.json();

        setMessages((prevMessages) => [
          ...prevMessages,
          { text: data.message.content, sender: "bot" },
        ]);
      } catch (error) {
        console.error("Error:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Error fetching response from the bot.", sender: "bot" },
        ]);
      }
    },
    []
  );

  // Handle send button click or Enter key
  const handleSendMessage = useCallback(() => {
    if (userInput.trim() !== "") {
      addUserMessage(userInput);
      addBotMessage(userInput); // Make API call here
      setUserInput(""); // Clear input field
    }
  }, [userInput, addUserMessage, addBotMessage]);

  return (
    <div style={{ position: 'relative', zIndex: 99999 }}>
      {/* Chat button */}
      <div style={{ position: 'fixed', bottom: '10px', left: '10px' }}>
        <button
          onClick={toggleChatbox}
          className="btn btn-primary d-flex align-items-center"
        >
          <i className="bi bi-chat-dots"></i>
          {/* Chat with Admin Bot */}
        </button>
      </div>

      {/* Chat container */}
      {isChatboxOpen && (
        <div style={{ position: 'fixed', bottom: '50px', left: '10px', width: '300px' }}>
          <div className="panel panel-default bg-white">
            <ChatHeader onClose={toggleChatbox} />
            <ChatMessages messages={messages} />
            <ChatInput
              userInput={userInput}
              setUserInput={setUserInput}
              handleSendMessage={handleSendMessage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
