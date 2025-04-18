import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails";
import ErrorPage from "./components/ErrorPage";
import { checkAuthLoader, tokenLoader } from "./utils/auth";

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    loader: tokenLoader,
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Login /> },
      { path: "/dashboard", element: <Dashboard />, loader: checkAuthLoader },
      { path: "/dashboard/:id", element: <UserDetails /> },
    ],
  },
]);

export default router;
