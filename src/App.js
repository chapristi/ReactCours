
import './App.css';
import Main from "./Components/Main/Main";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Form from "./Components/Main/Form";
import NotFound from "./Components/Main/NotFound";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="form" element={<Form/>} />
          <Route path="*" element={<NotFound/>} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;
