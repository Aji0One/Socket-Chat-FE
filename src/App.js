import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/dashboard";
import Chat from "./Pages/Chat/chat";
import "./App.css";
import ChatProvider from "./Context/ChatProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ChatProvider>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </ChatProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
