import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import BaseLayout from './pages/BaseLayout'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayout/>}>
            <Route path="/home" element={<HomePage/>}></Route>
            <Route path="/topic" element={<Topic/>}>
              <Route path="/topic/article" element={<Article/>}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);