import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";


function App() {
  return (

    <>
      <Nav />
      
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/pricing" element={<Home />} />
        <Route path="/about-us" element={<Home />} />
        <Route path="*" element={<Error404 />} />

      </Routes>

    </>
  );
}

export default App;
