
import authApi  from "./authAxiosInstance";

const validateUser = async ({ username, password }) => {
    

  try {
    let res = await authApi.post(`/login`, {
      username,
      password,
    });

    const token = res?.data?.accessToken;
    console.log(token);
    localStorage.setItem("token", token);
    return res?.data;

    
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

export { validateUser };
