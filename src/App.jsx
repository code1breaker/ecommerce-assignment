import {
  createBrowserRouter, Outlet, useLocation
} from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/home";
import Login from "./pages/login";
import ProtectedRoute from "./components/ProtectedRoute";
import Provider from "./context/Provider";
import Cart from "./pages/cart";
import HowToUse from "./pages/how-to-use";

function App() {
  const {pathname} = useLocation()

  return (
    <div className="bg-gray-200 min-h-screen">
      <Provider>
        {pathname=="/login" ? "" : <Header />}
        <Outlet/>
      </Provider>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute Component={Home} />,
      },
      {
        path: "/cart",
        element: <ProtectedRoute Component={Cart} />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/how-to-use",
        element: <HowToUse />,
      },
    ],
  },
]);

export default App;
