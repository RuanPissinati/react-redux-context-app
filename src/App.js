// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { Provider } from "react-redux";
import Routes from "./routes";
import store from "./store";
import GlobalStyle from "./styles/style";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  );
}

export default App;
