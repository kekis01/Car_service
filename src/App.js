import './App.css';
import MainPage from "./components/pages/MainPage";
import ManagerPage from "./components/pages/ManagerPage";
import OrderPage from "./components/pages/OrderPage";
import RegisterPage from "./components/pages/RegisterPage";
import AccountPage from "./components/pages/AccountPage";
import LoginManagerPage from "./components/pages/LoginManagerPage";

import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/Order" element={<OrderPage/>}/>
      <Route path="/Manager" element={<ManagerPage/>}/>
      <Route path="/Login" element={<RegisterPage/>}/>
      <Route path="/Account" element={<AccountPage/>}/>
      <Route path="/LoginManager" element={<LoginManagerPage/>}/>
    </Routes>
    </>
  );
}

export default App;
