// import React, { useEffect } from "react";

// const ChatbaseChat = () => {
//   useEffect(() => {
//     const script1 = document.createElement("script");
//     script1.text = `
//       window.embeddedChatbotConfig = {
//         chatbotId: "saP6GSWJARR1BUjqVbBZ2",
//         domain: "www.chatbase.co"
//       };
//     `;
//     document.head.appendChild(script1);

//     const script2 = document.createElement("script");
//     script2.src = "https://www.chatbase.co/embed.min.js";
//     script2.chatbotId = "saP6GSWJARR1BUjqVbBZ2";
//     script2.domain = "www.chatbase.co";
//     script2.defer = true;
//     document.head.appendChild(script2);

//     return () => {
//       document.head.removeChild(script1);
//       document.head.removeChild(script2);
//     };
//   }, []);

//   return <div>Chatbase Chat Component</div>;
// };

// export default ChatbaseChat;
import React from "react";

const ChatbaseChat = () => {
  return (
    <iframe
      title="Chatbase Chat"
      src="https://www.chatbase.co/chatbot-iframe/saP6GSWJARR1BUjqVbBZ2"
      width="100%"
      style={{ height: "500px", minHeight: "500px" }}
      frameBorder="0"
      className="border rounded shadow-md "
    />
  );
};

export default ChatbaseChat;
