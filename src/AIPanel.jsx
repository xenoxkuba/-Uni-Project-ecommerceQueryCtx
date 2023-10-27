import HeaderExtra from "./HeaderExtra";
import FeedAIPanel from "./FeedAIPanel";
import ChatbaseChat from "./ChatbaseChatBot";

const AIPanel = () => {
  const isITAIPanel = true;

  return (
    <div>
      <HeaderExtra isITAIPanel={isITAIPanel} />
      <FeedAIPanel />
    </div>
  );
};

export default AIPanel;
