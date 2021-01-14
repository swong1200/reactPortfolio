import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Image from "./images/13602.jpg";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="color">
        <Navbar />
        <Header backgroundImage={Image}>
          <h1>Stuart Wong</h1>
        </Header>
        <Wrapper>
          <Route exact path="/reactPortfolio/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
