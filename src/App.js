import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";
import PrivateRoute from "./Route/PrivateRoute";
function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log("AAA", authenticate);
  }, [authenticate]);
  return (
    <div>
      <Navbar setAuthenticate={setAuthenticate} authenticate={authenticate} />
      <Routes>
        <Route
          path="/"
          element={
            <ProductAll
              setAuthenticate={setAuthenticate}
              authenticate={authenticate}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              authenticate={authenticate}
              setAuthenticate={setAuthenticate}
            />
          }
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
