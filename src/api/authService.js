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
    // Instead of throwing, return a known "failed" shape
    if (error.response?.status === 401) {
      return { error: "Invalid credentials" }; // Return to onSuccess
    }
    throw error; // All other errors will still go to onError
  }



}
export { validateUser };


