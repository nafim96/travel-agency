import Home from './components/MainBoday/Home/Home';
import Navbar from './components/Shared/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/Shared/Footer/Footer';
import About from './components/MainBoday/About/About';
import AddService from './components/MainBoday/AddService/AddService';
import PrivateRouter from './components/Authentication/PrivateRouter/PrivateRouter';
import Login from './components/Authentication/Login/Login';
import { createContext, useState } from 'react';
import ServiceAdd from './components/Dashboard/ServiceAdd/ServiceAdd';
import MyOrder from './components/Dashboard/MyOrder/MyOrder';
import ManageService from "./components/Dashboard/ManageService/ManageService";
import ManageProduct from './components/Dashboard/ManageProduct/ManageProduct';
import Contact from './components/Shared/Contact/Contact';




export const UserContext = createContext();

function App ()
{
  const [ loggedInUser, setLoggedInUser ] = useState( {} );

  return (
    <UserContext.Provider value={ [ loggedInUser, setLoggedInUser ] }>
      <Router>
        <div className="pb-5">
          <Navbar />
        </div>
        <div className="container-fluid">
          <Switch>
            <main>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <PrivateRouter exact path="/bookService/:id">
                <AddService />
              </PrivateRouter>

              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/addService">
                <ServiceAdd />
              </Route>
              <Route exact path="/myOrder">
                <MyOrder />
              </Route>
              <Route exact path="/manageOrder">
                <ManageProduct />
              </Route>
              <Route exact path="/manageService">
                <ManageService />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
            </main>
          </Switch>
        </div>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
