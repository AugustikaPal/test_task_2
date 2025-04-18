import React, { useEffect, useState } from "react";
import {
  Outlet,
  Form,
  useNavigate,
  useLocation,
  useNavigation,
} from "react-router-dom";
import Button from "../common/Button";
import { useLoaderData } from "react-router-dom";
import "tailwindcss";
import { useRevalidator } from "react-router-dom";

const Header = () => {
  //const [token, setToken] = useState("");
  const loaderToken = useLoaderData();
  console.log(loaderToken, "--loader datat oken");

  //const location = useLocation();
  const revalidator = useRevalidator();

  const navigate = useNavigate();

  // useEffect(() => {
  //   const data = localStorage.getItem("token");
  //   setToken(data);
  // }, [location]);

  const handleClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <nav className="w-full fixed top-0 z-50 bg-white shadow-md">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-3">
          <div className="flex items-center gap-2">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="h-10 object-contain cursor-pointer"
              onClick={handleClick}
            />
          </div>

          {loaderToken && (
            <Button
              onClick={() => {
                localStorage.removeItem("token"); 
                revalidator.revalidate(); 
                navigate("/");
              }}
              className="px-4 py-2 bg-purple-600 text-white rounded  cursor-pointer hover:bg-purple-700 transition"
            >
              Logout
            </Button>
          )}
        </div>
      </nav>

      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default Header;
