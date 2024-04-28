 import './App.css';
import MainRouter from './MainRouter/MainRouter';
import Chat from './Pages/Chat';
import ChatContainer from './Pages/ChatContainer';
import Navbar from './components/Navbar';
 function App() {
  return (
    <div className="App relative">
       <Navbar/>
       <MainRouter/>
       <ChatContainer/>
    </div>
  );
}

export default App;
