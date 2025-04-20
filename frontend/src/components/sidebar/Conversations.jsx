import React from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emojis";

const Conversations = () => {
  const { loading, conversations } = useGetConversation();

  return (
    <div className="py-2 flex flex-col overflow-y-auto">
      {conversations?.length > 0 &&
        conversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id} // ✅ fixed key
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIdx={idx === conversations.length - 1} // ✅ fixed variable
          />
        ))}

      {loading && <span className="text-center text-white mt-4">Loading...</span>}
    </div>
  );
};

export default Conversations;
