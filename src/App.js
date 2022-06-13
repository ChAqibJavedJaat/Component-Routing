import "./App.css";
import Nav from "./Nav";
import SignUp from "./Sign-up";
import Login from "./Login";
import HomePage from "./Home";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
