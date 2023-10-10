import HeaderAIPanel from "./HeaderAIPanel";
import FeedAIPanel from "./FeedAIPanel";

const AIPanel = () => {
  const isITAIPanel = true;

  return (
    <div>
      <HeaderAIPanel isITAIPanel={isITAIPanel} />
      <FeedAIPanel />
    </div>
  );
};

export default AIPanel;
