import './App.css';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Login from './Pages/Login';
import ResetPassword from './Pages/ResetPassword';
import ForgotPassword from './Pages/ForgotPassword';
import MainLayout from './Components/MainLayout';
import Dashboard from './Pages/Dashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/admin' element={<MainLayout/>} >
          <Route index element= {<Dashboard />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
