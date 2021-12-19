// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Menus from './Pages/Menus/Menus';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/ProvateRoute/PrivateRoute';


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
            <Route path='/menus' element={<PrivateRoute><Menus></Menus></PrivateRoute>}>

            </Route>
            <Route path='/login' element={<Login></Login>}>

            </Route>
            <Route path='/register' element={<Register></Register>}>

            </Route>

          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
