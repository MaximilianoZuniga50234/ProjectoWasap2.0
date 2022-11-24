import ChatListElement from "./ChatListElement";

const ChatList = () => {

  return (
    <div className=" bg-slate-600 w-1/2 h-full border-r-2 border-r-zinc-400">
      <ChatListElement testText={"Holandaaa1"} />
      <ChatListElement testText={"Holandaaa2"} />
      <ChatListElement testText={"Holandaaa3"} />
      <ChatListElement testText={"Holandaaa4"} />
    </div>
  );
};

export default ChatList;
