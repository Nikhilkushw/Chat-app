import React from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emojis";

const Conversations = () => {
  const { loading, conversaton } = useGetConversation();
  console.log("Conversaton : ", conversaton);
  return (
    <div className="py-2 flex flex-col overflow-y-auto">
      {conversaton.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === Conversations.length - 1}
        />
      ))}
      {loading ? <span>loading...</span> : null}
    </div>
  );
};

export default Conversations;
