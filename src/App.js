// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Menus from './Pages/Menus/Menus';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddMenu from './Pages/Dashboard/AddMenu/AddMenu';
import OrderPlace from './Pages/OrderPlace/OrderPlace';
import ManageAllProducts from './Pages/Dashboard/ManageAllProducts/ManageAllProducts';
import ManageOrders from './Pages/Dashboard/ManageOrders/ManageOrders';
import Review from './Pages/Dashboard/Review/Review';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home></Home>}>

            </Route>
            <Route path='/home' element={<Home></Home>}>

            </Route>
            <Route path='/menus' element={<Menus></Menus>}>

            </Route>
            <Route path='/login' element={<Login></Login>}>

            </Route>
            <Route path='/register' element={<Register></Register>}>

            </Route>

            <Route path='/menus/orderPlace/:id' element={<PrivateRoute><OrderPlace></OrderPlace></PrivateRoute>}>

            </Route>

            {/* dashboard route */}

            <Route path='/dashboard' element={
              <PrivateRoute>
                <Dashboard></Dashboard>
              </PrivateRoute>
            }>

              <Route exact path='/dashboard' element={

                <DashboardHome></DashboardHome>
              }>
              </Route>
              <Route exact path='/dashboard/myOrders' element={

                <MyOrders />
              }>
              </Route>


              <Route exact path='/dashboard/review' element={

                <Review />
              }>
              </Route>


              <Route exact path='/dashboard/makeAdmin' element={

                <AdminRoute>
                  <MakeAdmin />
                </AdminRoute>
              }>
              </Route>
              <Route exact path='/dashboard/addMenu' element={

                <AdminRoute>
                  <AddMenu />
                </AdminRoute>
              }>
              </Route>
              <Route exact path='/dashboard/manageAllProducts' element={

                <AdminRoute>
                  <ManageAllProducts />
                </AdminRoute>
              }>
              </Route>
              <Route exact path='/dashboard/manageOrders' element={

                <AdminRoute>
                  <ManageOrders />
                </AdminRoute>
              }>
              </Route>




            </Route>


          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;



//https://secret-basin-80045.herokuapp.com/