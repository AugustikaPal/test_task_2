import Details from "./pages/Details";
import Login from "./pages/Login";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails"
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter,RouterProvider } from "react-router";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header/>,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Login /> },
        { path: "/dashboard", element: <Dashboard /> },
        // { path: "/details", element: <Details /> },
        { path: "/dashboard/:id", element: <UserDetails /> },
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
