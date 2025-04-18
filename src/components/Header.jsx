import React, { useEffect, useState } from "react";
import { Outlet, Form, useNavigate, useLocation,useNavigation } from "react-router-dom";
import Button from "../common/Button";
import "tailwindcss";

const Header = () => {
  const [token, setToken] = useState("");
  const location = useLocation();

  const navigate = useNavigate();

  const navigation = useNavigation();
  const isNavigating = navigation.state === "loading";
  useEffect(() => {
    const data = localStorage.getItem("token");
    setToken(data);
  }, [location]);

  const handleClick = () => {
    navigate("/dashboard");
  };
  console.log(navigation.state);

  return (
    <div className="min-h-screen overflow-hidden">

         {isNavigating && (
        <div className="fixed top-0 left-0 right-0 bg-purple-100 text-purple-800 text-sm text-center py-1 z-50">
          Loading...
        </div>
      )}
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

          {token && (
            <Button
              onClick={() => {
                localStorage.removeItem("token");
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
