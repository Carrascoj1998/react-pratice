import HomePage from "./praticeComponets /HomePage";
import React from "react";
import {Route, Routes,} from "react-router-dom";
import SubmitData from "./praticeComponets /SubmitData";




function App() {
  return (
      <Routes>
          {/*<Route path= "/" element={<HomePage />} />*/}
          <Route path= "/" element={< SubmitData/>} />
      </Routes>
  );
}

export default App;
