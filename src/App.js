import './App.css';
import MainPage from "./components/pages/MainPage";
import ManagerPage from "./components/pages/ManagerPage";
import OrderPage from "./components/pages/OrderPage";

import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/Order" element={<OrderPage/>}/>
      <Route path="/Manager" element={<ManagerPage/>}/>
    </Routes>
    </>
  );
}

export default App;
