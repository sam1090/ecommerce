import './App.css';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Login from './Pages/Login';
import ResetPassword from './Pages/ResetPassword';
import ForgotPassword from './Pages/ForgotPassword';
import MainLayout from './Components/MainLayout';
import Dashboard from './Pages/Dashboard';
import Enquiries from './Pages/Enquiries';
import BlogList from './Pages/BlogList';
import BlogCatList from './Pages/BlogCatList';
import Orders from './Pages/Orders';
import Customers from './Customers';
import ColorList from './ColorList';
import CategoryList from './CategoryList';
import BrandList from './BrandList';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/admin' element={<MainLayout/>} >
          <Route index element= {<Dashboard />} />
          <Route path='enquiry' element = {<Enquiries/>} />
          <Route path='blog-list' element = {<BlogList/>} />
          <Route path='blog-category-list' element = {<BlogCatList/>} />
          <Route path='orders' element = {<Orders/>} />
          <Route path='customers' element = {<Customers/>} />
          <Route path='color-list' element = {<ColorList/>} />
          <Route path='category-list' element = {<CategoryList/>} />
          <Route path='brand-list' element = {<BrandList/>} />

        </Route>

      </Routes>
    </Router>
  );
}
  
export default App;
