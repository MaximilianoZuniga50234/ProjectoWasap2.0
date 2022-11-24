const ChatListElement = ({testText}) => {
  return (
    <div className="bg-slate-700 border-b-2 border-b-zinc-500">
        <p className="text-white text-center text-3xl capitalize py-2">
            {testText}
        </p>
    </div>
  )
}

export default ChatListElement