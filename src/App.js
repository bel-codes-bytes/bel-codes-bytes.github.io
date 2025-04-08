import logo from "./logo.svg";
import "./App.css";
import { Welcome } from "./Welcome";
import NavbarComponent from "./Navbar";
import BlogHome from "./Blog/BlogHome.jsx";
import BlogEntry from "./Blog/Entries/BlogEntry.jsx";
import {
  HashRouter,
  Routes,
  Route,
  Link,
  LinkContainer,
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/blog" element={<BlogHome />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/article/:id" element={<BlogEntry />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
