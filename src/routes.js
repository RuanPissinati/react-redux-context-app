import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import CartScene from "./pages/CartScene";
import WelcomeScene from "./pages/WelcomeScene";

// Logica do token salvo no sessionStorage.
const isAuthenticated = () => sessionStorage.getItem('USER_NAME') ? true: false;

const PrivateRoute = ({ component: Component, ...restprops }) => (
  <Route
    {...restprops}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <WelcomeScene />} />
      <PrivateRoute path="/cart" component={() => <CartScene />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;



// import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
// import App from "./App";

// const isAuthenticated = () => true;

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) => {
//       isAuthenticated() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//       );
//     }}
//   />
// );

// const Routes = () => (
//   <BrowserRouter>
//     <Switch>
//       <Route exact path="/" component={() => "VAaI TOMAR NO CU USUARIO DE DORGAS"} />
//       <PrivateRoute path="/app" component={() => "logado"} />
//     </Switch>
//   </BrowserRouter>
// );

// export default Routes;