import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <header>
        <MainHeader/>
      </header>
      <main>
        <Switch>
          <Route path="/" exact><Redirect to="/welcome"/></Route>
          <Route path="/welcome"><Welcome/></Route>
          <Route path="/products" exact><Products/></Route>
          <Route path="/products/:productId"><ProductDetail/></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
