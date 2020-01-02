import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Loader from "./components/layout/Loader";
import Info from "./components/layout/Info";

export default function App() {
  return (
    <Router>
      <Loader />
      <Info />
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
}
