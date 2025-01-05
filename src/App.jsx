import { BrowserRouter, Routes, Route } from "react-router";
//Pages
import Home from "./pages/Home";

//components

//Styles
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
