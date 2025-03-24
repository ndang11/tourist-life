import { useState } from "react";
import axios from "axios";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! Ask me anything about travel destinations!", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  
  const API_KEY = import.meta.env.VITE_OPENAI_API_KEY; // Replace with your actual API key
  console.log("API Key:", API_KEY); 

  // Function to get AI-generated response
  const getBotResponse = async (userMessage) => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
            model: "gpt-3.5-turbo", // ✅ Use "gpt-3.5-turbo" or "gpt-4"
            messages: [{ role: "user", content: userMessage }],
            max_tokens: 200
        },
        { headers: { Authorization: `Bearer ${API_KEY}`, "Content-Type": "application/json" } }
      );

      return response.data.choices[0].message.content.trim();
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      return "Sorry, I couldn't process your request at the moment. Please try again later.";
    }
  };

  // Handle user message submission
  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage = input;
    setMessages([...messages, { text: userMessage, sender: "user" }]);
    setInput("");

    const botReply = await getBotResponse(input);
    setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
  };

  return (
    <div className={`chatbotcontainer ${open ? "open" : ""}`}>
      {/* Chat toggle button */}
      <button className="chattoggle" onClick={() => setOpen(!open)}>💬 Chat</button>

      {open && (
        <div className="chatwindow">
          <div className="chatheader">
            <h4>Travel Assistant</h4>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* Chat messages */}
          <div className="chatmessages">
            {messages.map((msg, index) => (
              <div key={index} className={`chatmessage ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* Chat input */}
          <div className="chatinput">
            <input 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="Ask me about any destination..." 
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
