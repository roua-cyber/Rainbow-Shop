import "./App.css"
import {useState} from 'react'
import {BrowserRouter as Router ,Switch , Route} from 'react-router-dom'
import logorose from './components/logorose.png'
import Naavbar from './Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Feed from './pages/Feed';
import PrivateRoute from './PrivateRoute'
//Screens
import LandingScreen from './Screens/LandingScreen';
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';
import ProductScreen from './Screens/ProductScreen';
import IdeasScreen from './Screens/IdeasScreen';
import ProfileScreen from './Screens/ProfileScreen';
import DashScreen from './Screens/DashScreen';

//components
import Navbar from './components/Navbar'
import Backdrop from './components/Backdrop'
import SideDrawer from './components/SideDrawer'
function App() {
  const[sideToggle,setSideToggle]=useState(false);
  return (
    <Router>

      <Navbar click={() =>setSideToggle(true)}/>
      <Backdrop show ={sideToggle} click={() =>setSideToggle(false)} />
      <SideDrawer show ={sideToggle} click={() =>setSideToggle(false)}/>
      <main>
        <Switch>
          <Route exact path="/" component={LandingScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/ideas" component={IdeasScreen} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/profile" component={ProfileScreen} />
          <PrivateRoute exact path="/feed" component={Feed}/> 
          <Route exact path="/:id" component={HomeScreen} /> 
          <Route exact path="/profile/:adminid" component={DashScreen} />
          <Route exact path="/:id/:productid" component={ProductScreen}/>

        </Switch>
      </main>
  {/* footer */}
  <footer>
    <div className="container" >
    <div>
          <img src={logorose} alt="Logo" style={{width:"150px"}} />
    </div>
    <div>
        <ul>
            <li>About Us</li>
            <li>Press and PR</li>
            <li>Careers</li>
            <li>Blog</li>
        </ul>
    </div>
    <div>
        <ul>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Cookies</li>
        </ul> 
    </div>

    <div>
        <ul>
            <li>01635 201844</li>
            <li>Our phone lines are open Monday to Friday from 8:30am to 5pm.
             (Excluding Bank Holidays)</li>
        </ul>
    </div>
 </div>
  </footer>    </Router>
      
  );
}

export default App;