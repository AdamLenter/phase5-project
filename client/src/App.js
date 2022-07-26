import { React, useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginScreen from "./Components/LoginScreen";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/">
            <LoginScreen />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;