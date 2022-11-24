import NavBar from "./components/NavBar";
import ChatList from "./components/ChatList";
import ChatView from "./components/ChatView";

function App() {
  return (
    <main className="bg-emerald-700 h-screen">
      <div>
        <NavBar />
      </div>
      <div className="flex h-full">
        <ChatList />
        <ChatView />
      </div>
    </main>
  );
}

export default App;
