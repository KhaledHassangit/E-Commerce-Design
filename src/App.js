import React from 'react';
import HomePage from './Pages/Home/HomePage';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import NavBarLogin from './Components/Utilities/NavBar';
import Footer from "./Components/Utilities/Footer"
import LoginPage from './Pages/Auth/LoginPage';
import Register from './Pages/Auth/Register';
import AllCategory from './Pages/Category/AllCategory';
import AllBrands from './Pages/Brand/AllBrands';
import AllProductsPage from './Pages/Products/AllProductsPage';
import ProductsDetailsPage from './Pages/Products/ProductsDetailsPage';
import CardPage from './Pages/Cart/CardPage';
import ChoosePayMethodPage from './Pages/PaymentPage/ChoosePayMethodPage';
import AdminAllProductPage from './Pages/Admin/AdminAllProductPage';
import AdminAllOrderPage from './Pages/Admin/AdminAllOrderPage';
import AdminOrderDetailsPage from './Pages/Admin/AdminOrderDetailsPage';
import AdminAddBrandPage from './Pages/Admin/AdminAddBrandPage';
import AdminAddCategoryPage from './Pages/Admin/AdminAddCategoryPage';
import { AdminAddSubCatPage } from './Pages/Admin/AdminAddSubCatPage';
import { AdminAddProductPage } from './Pages/Admin/AdminAddProductPage';
import { UserAllOrdersPage } from './Pages/User/UserAllOrdersPage';
import { UserFavouriteProductsPage } from './Pages/User/UserFavouriteProductsPage';
import { UserAllAdressesPage } from './Pages/User/UserAllAdressesPage';
import { UserEditAdressPage } from './Pages/User/UserEditAdressPage';
import { UserAddAdressPage } from './Pages/User/UserAddAdressPage';
import { UserProfilePage } from './Pages/User/UserProfilePage';
function App() {
  return (
    <div className='font'>

      <NavBarLogin/>

      <BrowserRouter>
        <Routes>

          <Route index element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/allcategory'  element={<AllCategory/>}/>
          <Route path='/AllBrands' element={<AllBrands/>}/>
          <Route path='/AllProducts' element={<AllProductsPage/>}/>
          <Route path='/AllProducts/:id' element={<ProductsDetailsPage/>}/>
          <Route path='/cart' element={<CardPage/>}/>
          <Route path='/order/paymethod' element={<ChoosePayMethodPage/>}/>
          <Route path='/admin/AllProduct' element={<AdminAllProductPage/>}/>
          <Route path='/admin/AllOrders' element={<AdminAllOrderPage/>}/>
          <Route path='/admin/AllOrders/:id' element={<AdminOrderDetailsPage/>}/>
          <Route path='/admin/AddBrand' element={<AdminAddBrandPage/>}/>
          <Route path='/admin/Category' element={<AdminAddCategoryPage/>}/>
          <Route path='/admin/SubCategory' element={<AdminAddSubCatPage/>}/>
          <Route path='/admin/AddProduct' element={<AdminAddProductPage/>}/>
          <Route path='/User/AllOrders' element={<UserAllOrdersPage/>}/>
          <Route path="/User/FavoriteProducts" element={<UserFavouriteProductsPage/>}/>
          <Route path="/User/AllAddresses" element={<UserAllAdressesPage/>}/>
          <Route path="/User/EditAdress" element={<UserEditAdressPage/>}/>
          <Route path="/User/AddAddress" element={<UserAddAdressPage/>}/>
          <Route path="/User/Profile" element={<UserProfilePage/>}/>
          
        </Routes>
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
