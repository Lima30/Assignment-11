import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddService from './Pages/AddService/AddService';
import MyOrder from './Pages/My Order/MyOrder';
import manageOrder from './Pages/manageOrder/manageOrder';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
// import Expert from './Pages/Home/Expert/Expert';
import Aminities from './Pages/Amenities/Aminities';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/amenities">
              <Aminities></Aminities>
            </Route>

            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/addServices">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/myorder">
              <MyOrder></MyOrder>
            </PrivateRoute>

            <PrivateRoute path="/manageOrder">
              <manageOrder></manageOrder>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
      <div>
        <Footer></Footer>
      </div>

    </div>
  );
}

export default App;
