import logo from "./logo.svg";
import "./App.css";
import { Welcome } from "./Welcome";
import NavbarComponent from "./Navbar";
import BlogHome from "./Blog/BlogHome.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/blog" element={<BlogHome />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
