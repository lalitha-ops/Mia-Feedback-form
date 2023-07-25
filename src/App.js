import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/users/Login";
import MiaFeedBack from "./components/MiaFeedBack";
import "./App.css";
import PrivateComponent from "./Common/PrivateComponet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/MiaPostNpim" element={<Login />} />
        <Route element={<PrivateComponent />}>
          <Route path="/MiaPostNpim/feedback/form" element={<MiaFeedBack />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
