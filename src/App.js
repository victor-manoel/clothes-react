import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Products from "../src/pages/home";
import ProductDetail from "../src/pages/detail";

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact>
        <Products />
      </Route>
      <Route path="/detail">
        <ProductDetail />
      </Route>
    </Router>
  );
};

export default App;
