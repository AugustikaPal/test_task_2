
import authApi  from "./authAxiosInstance";

const validateUser = async ({ username, password }) => {
    

  try {
    let res = await authApi.post(`/login`, {
      username,
      password,
    });

    const token = res?.data?.accessToken;
    localStorage.setItem("token", token);

    return res?.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { validateUser };
