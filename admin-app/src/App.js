import './App.css';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Login from './Pages/Login';
import ResetPassword from './Pages/ResetPassword';
import ForgotPassword from './Pages/ForgotPassword';
import MainLayout from './Pages/MainLayout';
import Dashboard from './Pages/Dashboard';
import Enquiries from './Pages/Enquiries';
import BlogList from './Pages/BlogList';
import BlogCatList from './Pages/BlogCatList';
import Orders from './Pages/Orders';
import Customers from './Pages/Customers';
import ColorList from './Pages/ColorList';
import CategoryList from './Pages/CategoryList';
import BrandList from './Pages/BrandList';
import ProductList from './Pages/ProductList';
import AddBlog from './Pages/AddBlog';
import AddBlogCat from './Pages/AddBlogCat';
import AddColor from './Pages/AddColor';
import AddCat from './Pages/AddCat';
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
          <Route path='blog' element = {<AddBlog/>} />
          <Route path='blog-list' element = {<BlogList/>} />
          <Route path='blog-category-list' element = {<BlogCatList/>} />
          <Route path='blog-category' element = {<AddBlogCat/>} />
          <Route path='orders' element = {<Orders/>} />
          <Route path='customers' element = {<Customers/>} />
          <Route path='color-list' element = {<ColorList/>} />
          <Route path='color' element = {<AddColor/>} />
          <Route path='category-list' element = {<CategoryList/>} />
          <Route path='category' element = {<AddCat/>} />
          <Route path='brand-list' element = {<BrandList/>} />
          <Route path='product-list' element = {<ProductList/>} />

        </Route>

      </Routes>
    </Router>
  );
}
  
export default App;
