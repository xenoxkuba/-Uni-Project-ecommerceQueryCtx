// import React, { useState } from "react";
// // import { sendMsgToOpenAI } from "./ChatBot";

// const OpenAIPanel = () => {
//   const [userInput, setUserInput] = useState("");
//   const [messages, setMessages] = useState([]);

//   const handleSendMessage = async () => {
//     // Dodajemy wiadomość od użytkownika
//     // const res = await sendMsgToOpenAI
//     // console.log(res);

//     setMessages((prevMessages) => [
//       ...prevMessages,
//       { text: userInput, fromUser: true },
//     ]);

//     // Symulacja odpowiedzi od bota (tutaj możesz dodać integrację z ChatGPT)
//     setTimeout(() => {
//       const botResponse =
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { text: botResponse, fromUser: false },
//       ]);
//     }, 500);

//     // Czyścimy pole wprowadzania po wysłaniu wiadomości
//     setUserInput("");
//   };

//   return (
//     <div className="max-w-md mx-auto p-4">
//       <div className="bg-white p-4 rounded-md shadow-md h-60 overflow-y-auto">
//         {/* Wyświetl wiadomości */}
//         {messages.map((message, index) => (
//           <div key={index} className="mb-2">
//             <span
//               className={`inline-block p-2 rounded-lg ${
//                 message.fromUser
//                   ? "bg-blue-200 text-blue-700"
//                   : "bg-gray-200 text-gray-700"
//               }`}
//             >
//               {message.text}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* Pole wprowadzania tekstu */}
//       <div className="flex mt-2">
//         <input
//           type="text"
//           placeholder="Napisz wiadomość..."
//           value={userInput}
//           onChange={(e) => setUserInput(e.target.value)}
//           className="flex-grow px-4 py-2 border rounded-l-full focus:outline-none text-gray-800"
//         />
//         <button
//           onClick={handleSendMessage}
//           className="bg-blue-500 text-white px-4 py-2 rounded-r-full focus:outline-none"
//         >
//           Wyślij
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OpenAIPanel;
