import { app } from "./firebaseConfig.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login/Login.jsx";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
