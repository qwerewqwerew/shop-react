import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import New from "./pages/New";
import RouteTest from "./components/RouteTest";
const App = () => {
  return(
  <BrowserRouter>
      <div className="App">
        <h1>App 컴포넌트</h1>
        <hr/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/diary/:id" element={<Diary/>} />
            <Route path="/new" element={<New/>} />
            <Route path="/edit" element={<Edit/>} />
        </Routes>
      </div>
      <hr/>
      <RouteTest></RouteTest>
  </BrowserRouter>
  );
};
export default App;
