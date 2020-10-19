import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header state={props.state.header} />
          <Main state={props.state.main} dispatch={props.dispatch} />
          <Footer state={props.state.footer} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
