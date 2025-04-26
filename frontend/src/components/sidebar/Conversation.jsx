import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const { onlineUsers } = useSocketContext();

	const isSelected = selectedConversation?._id === conversation._id;
  console.log("isSelected", isSelected)
	const isOnline = onlineUsers.includes(conversation._id); 
  console.log("onlineUser", onlineUsers);
  console.log("conversation", conversation._id);
  console.log("isOnline", isOnline);


	return (
		<>
			<div
				className={`flex gap-3 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
        ${isSelected ? "bg-sky-500" : ""}
      `}
				onClick={() => setSelectedConversation(conversation)}
			>
				{/* Avatar + online indicator */}
				<div className="relative">
					<img
						src={conversation.profilePic}
						alt="user avatar"
						className="w-12 h-12 rounded-full object-cover"
					/>
					{/* Online green dot */}
					{isOnline && (
						<span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-[2px] border-white rounded-full z-10"></span>
					)}
				</div>

				{/* Info + Emoji */}
				<div className="flex flex-col flex-1">
					<div className="flex gap-3 justify-between items-center">
						<p className="font-bold text-gray-200">{conversation.fullName}</p>
						<span className="text-xl">{emoji}</span>
					</div>
				</div>
			</div>

			{/* Divider */}
			{!lastIdx && <div className="divider my-0 py-0 h-[1px] bg-gray-700" />}
		</>
	);
};

export default Conversation;
