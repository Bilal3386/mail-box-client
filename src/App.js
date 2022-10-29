import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Route, Routes,  Navigate } from "react-router-dom";
import Authentication from "./components/Authentication/Authentication";
import Header from "./components/Layout/Header";
import ComposePage from "./pages/ComposePage";
import HomePage from "./pages/HomePage";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Fragment>
      {isLoggedIn && <Header />}
      <main>
        <Routes>
          {!isLoggedIn && <Route path="/auth" element={<Authentication />} />}
          <Route path="/auth" element={<Navigate replace to="/" />} />
          {isLoggedIn && <Route path="/" element={<HomePage />} />}
          {isLoggedIn && <Route path="/compose" element={<ComposePage/>} />}
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
