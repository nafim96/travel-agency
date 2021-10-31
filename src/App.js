import './App.css';
import Home from './components/MainBoday/Home/Home';
import Navbar from './components/Shared/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/Shared/Footer/Footer';
import About from './components/MainBoday/About/About';
import img1 from "./components/MainBoday/Header/image/travel1.jpg";
import img2 from "./components/MainBoday/Header/image/travel2.jpg";
import img3 from "./components/MainBoday/Header/image/travel3.jpg";
import img4 from "./components/MainBoday/Header/image/travel1.jpg";
import img5 from "./components/MainBoday/Header/image/travel2.jpg";
import img6 from "./components/MainBoday/Header/image/travel4.jpg";
import AddService from './components/MainBoday/AddService/AddService';


export const data = [
  {
    "id": "1",
    "title": "Bus",
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum assumenda debitis harum dicta odio eligendi aliquid. Dolorum itaque veniam blanditiis mollitia hic beatae ex nemo, autem harum incidunt perferendis quae odit ea repudiandae temporibus iusto eius quo et dicta maiores vitae, dolor odio vero magni! Omnis eius animi distinctio provident?",
    "img": img1
  },
  {
    "id": "2",
    "title": "Bus",
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum assumenda debitis harum dicta odio eligendi aliquid. Dolorum itaque veniam blanditiis mollitia hic beatae ex nemo, autem harum incidunt perferendis quae odit ea repudiandae temporibus iusto eius quo et dicta maiores vitae, dolor odio vero magni! Omnis eius animi distinctio provident?",
    "img": img2
  },
  {
    "id": "3",
    "title": "Bus",
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum assumenda debitis harum dicta odio eligendi aliquid. Dolorum itaque veniam blanditiis mollitia hic beatae ex nemo, autem harum incidunt perferendis quae odit ea repudiandae temporibus iusto eius quo et dicta maiores vitae, dolor odio vero magni! Omnis eius animi distinctio provident?",
    "img": img3
  },
  {
    "id": "4",
    "title": "Bus",
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum assumenda debitis harum dicta odio eligendi aliquid. Dolorum itaque veniam blanditiis mollitia hic beatae ex nemo, autem harum incidunt perferendis quae odit ea repudiandae temporibus iusto eius quo et dicta maiores vitae, dolor odio vero magni! Omnis eius animi distinctio provident?",
    "img": img4
  },
  {
    "id": "5",
    "title": "Bus",
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum assumenda debitis harum dicta odio eligendi aliquid. Dolorum itaque veniam blanditiis mollitia hic beatae ex nemo, autem harum incidunt perferendis quae odit ea repudiandae temporibus iusto eius quo et dicta maiores vitae, dolor odio vero magni! Omnis eius animi distinctio provident?",
    "img": img5
  },
  {
    "id": "6",
    "title": "Bus",
    "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum assumenda debitis harum dicta odio eligendi aliquid. Dolorum itaque veniam blanditiis mollitia hic beatae ex nemo, autem harum incidunt perferendis quae odit ea repudiandae temporibus iusto eius quo et dicta maiores vitae, dolor odio vero magni! Omnis eius animi distinctio provident?",
    "img": img6
  },
];

function App ()
{
  return (
    <Router>
      <Navbar />
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
            <Route exact path="/bookService/:id">
              <AddService />
            </Route>
          </main>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
