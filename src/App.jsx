import Details from "./pages/Details";
import Login from "./pages/Login";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails"
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter,RouterProvider } from "react-router";
// import {logoutAction} from "./util/auth";
import { checkAuthLoader, tokenLoader } from "./util/auth";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      id:'root',
      loader: tokenLoader,
      element: <Header/>,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Login /> },
        { path: "/dashboard", element: <Dashboard /> , loader:checkAuthLoader },
        // { path: "/details", element: <Details /> },
        { path: "/dashboard/:id", element: <UserDetails /> },
        // {path:"/logout" , action : logoutaction }
      ],
    },
  ]);

  return (
    <>
     <RouterProvider router={router} />

     
    </>
  );
}

export default App;
