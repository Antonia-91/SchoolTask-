import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Section from "./components/Section";
import Products from "./components/Products";

function App() {
  const [myBag, setMyBag] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await fetchProducts();
      setProducts(productsFromServer);
    };

    getProducts();
  }, []);

  // fetch products
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5005/products");
    const data = await res.json();

    console.log(data);
    return data;
  };

  // Buy this product
  const schooseProd = (title) => {
    console.log("buy this", title);
  };

  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/products">
            <Products products={products} clicking={schooseProd} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

// return (
//   <div className="app">
//     <Router>
//       <Route path="/" component={Header} />
//       <Switch>
//         <Route path="/products">
//           <Section />
//         </Route>
//       </Switch>
//     </Router>
//   </div>
// );

// return (
//   <div className="app">
//     <Router>
//       <Route path="/" component={Header} />
//       <Switch>
//         <Route path="/products">
//           <Products products={products} clicking={schooseProd} />
//         </Route>
//       </Switch>
//     </Router>
//   </div>
// );

// return (
//   <div className="app">
//     <Router>
//       <Header />
//       <Products products={products} clicking={schooseProd} />
//     </Router>
//   </div>
// );

export default App;
