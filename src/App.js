import logo from "./logo.svg";
import "./App.css";
import { Welcome } from "./Welcome";
import NavbarComponent from "./Navbar";
import BlogHome from "./Blog/BlogHome.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/blog" element={<BlogHome />}></Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
