import React from "react";
import { StateProvider } from "./store/store";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./pages/Main/Main";

function App() {
  return (
    <StateProvider>
      <Router>
        <Route exact path="/" component={Main} />
      </Router>
    </StateProvider>
  );
}

export default App;
