import { Routes, Route } from "react-router-dom";
import "styles/global.css";
import "./i18n";

import Header from "components/Header/Header";
import Home from "pages";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Routes>
        <Route path='' element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
