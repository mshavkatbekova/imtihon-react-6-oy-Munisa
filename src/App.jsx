import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import { useEffect } from "react";
import Login from "./pages/Login";
import { useGlobalContext } from "./hooks/useGlobalContext";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Signup from "./pages/Signup";


function App() {
  const { user, onAuthChange } = useGlobalContext();

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={true}>
          <RootLayout />
        </ProtectedRoutes>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return <>{onAuthChange && <RouterProvider router={routes} />}</>;
}

export default App;
