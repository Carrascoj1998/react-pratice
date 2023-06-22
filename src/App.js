import HomePage from "./praticeComponets /HomePage";
import React from "react";
import {Route, Routes,} from "react-router-dom";
import TodoList from "./praticeComponets /TodoList";



function App() {
  return (
      <Routes>
          {/*<Route path= "/" element={<HomePage />} />*/}
          <Route path= "/" element={<TodoList />} />
      </Routes>
  );
}

export default App;
