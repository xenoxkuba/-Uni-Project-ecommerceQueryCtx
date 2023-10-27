const CustomerChatbot = ({ isVisible }) => {
  if (!isVisible) {
    return null; // Jeśli chatbot nie jest widoczny, zwracamy null (nic nie renderujemy)
  }

  return (
    <div className="fixed bottom-0  right-0 top-0 flex items-center justify-center">
      <iframe
        title="Chatbase Chat"
        src="https://www.chatbase.co/chatbot-iframe/vUMzwwWVnAZ7OTeQffCak"
        width="100%"
        style={{ height: "500px", minHeight: "500px" }}
        frameBorder="0"
        className="border rounded shadow-md "
      />
    </div>
  );
};

export default CustomerChatbot;
